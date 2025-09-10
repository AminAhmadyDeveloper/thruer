import { createOpenAI } from "@ai-sdk/openai";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import {
  convertToModelMessages,
  experimental_createMCPClient,
  streamText,
  type UIMessage,
} from "ai";
import { payedAiFlag } from "@/lib/flags-api";
import { variables } from "@/lib/variables-utils";

export const maxDuration = 30;

const transport = new StreamableHTTPClientTransport(
  new URL("https://thruer.vercel.app/api/mcp"),
);

const mcp = await experimental_createMCPClient({ transport });
const tools = await mcp.tools();

export async function POST(req: Request) {
  const openrouter = createOpenRouter({
    apiKey: variables.OPENROUTER_API_KEY,
  });

  const gapgpt = createOpenAI({
    baseURL: "https://api.gapgpt.app/v1",
    apiKey: variables.GAP_GPT_API_KEY,
  });

  const { messages, model } = (await req.json()) as {
    messages: UIMessage[];
    model: string;
  };

  const isPayed = await payedAiFlag();

  const result = streamText({
    model: isPayed ? gapgpt(model) : openrouter(model),
    messages: convertToModelMessages(messages),
    tools,
    system:
      "You are a helpful assistant that can answer questions and help with tasks",
  });

  return result.toUIMessageStreamResponse({
    sendSources: true,
    sendReasoning: true,
  });
}
