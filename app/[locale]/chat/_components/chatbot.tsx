"use client";

import { useChat } from "@ai-sdk/react";
import { useMutation } from "@tanstack/react-query";
import { GlobeIcon } from "lucide-react";
import { type FC, Fragment, useMemo, useState } from "react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Loader } from "@/components/ai-elements/loader";
import { Message, MessageContent } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputButton,
  PromptInputModelSelect,
  PromptInputModelSelectContent,
  PromptInputModelSelectItem,
  PromptInputModelSelectTrigger,
  PromptInputModelSelectValue,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/components/ai-elements/reasoning";
import { Response } from "@/components/ai-elements/response";
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/components/ai-elements/sources";
import { Button } from "@/components/ui/button";
import { For } from "@/components/utils/for";
import { authClient } from "@/lib/auth-client";
import type { payedAiFlag } from "@/lib/flags-api";

export type ChatBotProps = {
  payedAi: Awaited<ReturnType<typeof payedAiFlag>>;
};

export const ChatBot: FC<ChatBotProps> = ({ payedAi }) => {
  const [input, setInput] = useState("");
  const [webSearch, setWebSearch] = useState(false);
  const { messages, sendMessage, status } = useChat();

  const models = useMemo(() => {
    if (payedAi) {
      return [
        {
          name: "GTP 5 nano",
          value: "openai/gpt-5-nano",
        },
        {
          name: "GPT 4o",
          value: "openai/gpt-4o",
        },
        {
          name: "GTP 5 mini",
          value: "openai/gpt-5-mini",
        },
      ];
    }
    return [
      {
        name: "Google Gemini 2.5 Flash",
        value: "google/gemini-2.5-flash-image-preview:free",
      },
      {
        name: "Deepseek Chat V3.1",
        value: "deepseek/deepseek-chat-v3.1:free",
      },
      {
        name: "GPT Oss 120B",
        value: "openai/gpt-oss-120b:free",
      },
    ];
  }, [payedAi]);

  const [model, setModel] = useState<string>(models[1].value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(
        { text: input },
        {
          body: {
            model,
            webSearch,
          },
        }
      );
      setInput("");
    }
  };

  const purchase50TokensMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await authClient.checkout({
        slug: "50-tokens",
      });

      if (error) {
        throw error;
      }

      return data;
    },
  });

  return (
    <Fragment>
      <Button
        className="w-full"
        loading={purchase50TokensMutation.isPending}
        onClick={() => {
          purchase50TokensMutation.mutate();
        }}
      >
        50 tokens
      </Button>
      <div className="relative mx-auto mt-6 size-full h-[70vh] max-w-4xl p-6">
        <div className="flex h-full flex-col">
          <Conversation className="h-full">
            <ConversationContent>
              <For each={messages}>
                {(message) => (
                  <div key={message.id}>
                    {message.role === "assistant" && (
                      <Sources>
                        <SourcesTrigger
                          count={
                            message.parts.filter(
                              (part) => part.type === "source-url"
                            ).length
                          }
                        />
                        <For
                          each={message.parts.filter(
                            (part) => part.type === "source-url"
                          )}
                        >
                          {(part, i) => (
                            <SourcesContent key={`${message.id}-${i}`}>
                              <Source
                                href={part.url}
                                key={`${message.id}-${i}`}
                                title={part.url}
                              />
                            </SourcesContent>
                          )}
                        </For>
                      </Sources>
                    )}
                    <Message from={message.role} key={message.id}>
                      <MessageContent>
                        <For each={message.parts}>
                          {(part, i) => {
                            switch (part.type) {
                              case "text":
                                return (
                                  <Response key={`${message.id}-${i}`}>
                                    {part.text}
                                  </Response>
                                );
                              case "reasoning":
                                return (
                                  <Reasoning
                                    className="w-full"
                                    isStreaming={status === "streaming"}
                                    key={`${message.id}-${i}`}
                                  >
                                    <ReasoningTrigger />
                                    <ReasoningContent>
                                      {part.text}
                                    </ReasoningContent>
                                  </Reasoning>
                                );
                              default:
                                return null;
                            }
                          }}
                        </For>
                      </MessageContent>
                    </Message>
                  </div>
                )}
              </For>

              {status === "submitted" && <Loader />}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          <PromptInput className="mt-4" onSubmit={handleSubmit}>
            <PromptInputTextarea
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <PromptInputToolbar>
              <PromptInputTools>
                <PromptInputButton
                  onClick={() => setWebSearch(!webSearch)}
                  variant={webSearch ? "default" : "ghost"}
                >
                  <GlobeIcon size={16} />
                  <span>Search</span>
                </PromptInputButton>
                <PromptInputModelSelect
                  onValueChange={(value) => {
                    setModel(value);
                  }}
                  value={model}
                >
                  <PromptInputModelSelectTrigger>
                    <PromptInputModelSelectValue />
                  </PromptInputModelSelectTrigger>
                  <PromptInputModelSelectContent>
                    <For each={models}>
                      {(modelItem) => (
                        <PromptInputModelSelectItem
                          key={modelItem.value}
                          value={modelItem.value}
                        >
                          {modelItem.name}
                        </PromptInputModelSelectItem>
                      )}
                    </For>
                  </PromptInputModelSelectContent>
                </PromptInputModelSelect>
              </PromptInputTools>
              <PromptInputSubmit disabled={!input} status={status} />
            </PromptInputToolbar>
          </PromptInput>
        </div>
      </div>
    </Fragment>
  );
};
