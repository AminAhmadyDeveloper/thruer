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
import { authClient } from "@/lib/auth-client";
import type { aiTypeFlag } from "@/lib/flags-api";

export interface ChatBotProps {
  aiType: Awaited<ReturnType<typeof aiTypeFlag>>;
}

export const ChatBot: FC<ChatBotProps> = ({ aiType }) => {
  const [input, setInput] = useState("");
  const [webSearch, setWebSearch] = useState(false);
  const { messages, sendMessage, status } = useChat();

  const models = useMemo(() => {
    switch (aiType) {
      case "gap_gpt":
        return [
          {
            name: "GTP 5 nano",
            value: "gpt-5-nano",
          },
          {
            name: "GPT 4o",
            value: "gpt-4o",
          },
          {
            name: "GTP 5 mini",
            value: "gpt-5-mini",
          },
          {
            name: "O1",
            value: "o1",
          },
        ];

      case "liara":
        return [
          {
            name: "Google: Gemini 2.0 Flash",
            value: "google/gemini-2.0-flash-001",
          },
          {
            name: "OpenAI: GPT 4o mini",
            value: "openai/gpt-4o-mini",
          },
        ];
      case "open_router":
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
    }
  }, [aiType]);

  const [model, setModel] = useState<string>(models[1].value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(
        { text: input },
        {
          body: {
            model: model,
            webSearch: webSearch,
          },
        },
      );
      setInput("");
    }
  };

  const purchase50TokensMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await authClient.checkout({
        slug: "50-tokens",
      });
      if (error) throw error;
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
      <div className="max-w-4xl mx-auto p-6 mt-6 relative size-full h-[70vh]">
        <div className="flex flex-col h-full">
          <Conversation className="h-full">
            <ConversationContent>
              {messages.map((message) => (
                <div key={message.id}>
                  {message.role === "assistant" && (
                    <Sources>
                      <SourcesTrigger
                        count={
                          message.parts.filter(
                            (part) => part.type === "source-url",
                          ).length
                        }
                      />
                      {message.parts
                        .filter((part) => part.type === "source-url")
                        .map((part, i) => (
                          <SourcesContent key={`${message.id}-${i}`}>
                            <Source
                              key={`${message.id}-${i}`}
                              href={part.url}
                              title={part.url}
                            />
                          </SourcesContent>
                        ))}
                    </Sources>
                  )}
                  <Message from={message.role} key={message.id}>
                    <MessageContent>
                      {message.parts.map((part, i) => {
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
                                key={`${message.id}-${i}`}
                                className="w-full"
                                isStreaming={status === "streaming"}
                              >
                                <ReasoningTrigger />
                                <ReasoningContent>{part.text}</ReasoningContent>
                              </Reasoning>
                            );
                          default:
                            return null;
                        }
                      })}
                    </MessageContent>
                  </Message>
                </div>
              ))}
              {status === "submitted" && <Loader />}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          <PromptInput onSubmit={handleSubmit} className="mt-4">
            <PromptInputTextarea
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <PromptInputToolbar>
              <PromptInputTools>
                <PromptInputButton
                  variant={webSearch ? "default" : "ghost"}
                  onClick={() => setWebSearch(!webSearch)}
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
                    {models.map((model) => (
                      <PromptInputModelSelectItem
                        key={model.value}
                        value={model.value}
                      >
                        {model.name}
                      </PromptInputModelSelectItem>
                    ))}
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
