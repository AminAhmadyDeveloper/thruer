import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import {
  convertToModelMessages,
  experimental_createMCPClient,
  streamText,
  type UIMessage,
} from "ai";
import { aiTypeFlag } from "@/lib/flags-api";
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

  const gapgpt = createOpenAICompatible({
    baseURL: "https://api.gapgpt.app/v1",
    name: "gap_gpt",
    apiKey: variables.GAP_GPT_API_KEY,
  });

  const liara = createOpenAICompatible({
    baseURL: "https://ai.liara.ir/api/v1/68c1edbf69472482e2bf0bfe",
    name: "liara",
    apiKey: variables.LIARA_API_KEY,
  });

  const { messages, model } = (await req.json()) as {
    messages: UIMessage[];
    model: string;
  };

  const aiType = await aiTypeFlag();

  const selectProvider = (aiType: Awaited<ReturnType<typeof aiTypeFlag>>) => {
    switch (aiType) {
      case "gap_gpt":
        return gapgpt(model);
      case "liara":
        return liara(model);
      case "open_router":
        return openrouter(model);
      default:
        return openrouter(model);
    }
  };

  const result = streamText({
    model: selectProvider(aiType),
    messages: convertToModelMessages(messages),
    tools,
    system:
      "You are a helpful assistant that can answer questions and help with tasks. dont stop generating on finishes tool call, get tools output and start generating and sending steps as text-delta to show in ui.",
  });

  return result.toUIMessageStreamResponse({
    sendSources: true,
    sendReasoning: true,
  });
}
