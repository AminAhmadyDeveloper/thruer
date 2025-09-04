import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { variables } from "@/lib/variables-utils";

export const maxDuration = 30;

export async function POST(req: Request) {
  const openrouter = createOpenRouter({
    apiKey: variables.OPENROUTER_API_KEY,
  });

  const { messages, model } = (await req.json()) as {
    messages: UIMessage[];
    model: string;
  };

  const result = streamText({
    model: openrouter(model),
    messages: convertToModelMessages(messages),
    system:
      "You are a helpful assistant that can answer questions and help with tasks",
  });

  return result.toUIMessageStreamResponse({
    sendSources: true,
    sendReasoning: true,
  });
}
