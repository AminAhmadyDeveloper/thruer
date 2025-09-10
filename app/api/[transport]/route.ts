import { createMcpHandler } from "mcp-handler";
import { z } from "zod/v3";
import { groupedFeatures } from "@/data/features";

const handler = createMcpHandler(
  (server) => {
    server.tool(
      "roll_dice",
      "Rolls an N-sided die",
      {
        sides: z.number().int().min(2),
      },
      async ({ sides }) => {
        const value = 1 + Math.floor(Math.random() * sides);
        return {
          content: [
            {
              type: "text",
              text: `🎲 You rolled a ${value}!. Please summarize this in a human-friendly format.`,
            },
          ],
        };
      },
    );
    server.tool("features", "Get all features", {}, async () => {
      return {
        content: [
          {
            type: "text",
            text: `Here is the grouped features JSON: ${JSON.stringify(groupedFeatures)}. Please summarize this in a human-friendly format.`,
          },
        ],
      };
    });
  },
  {
    capabilities: {
      tools: {
        roll_dice: {
          description: "Roll a dice",
        },
        features: {
          description: "Shows all features of boilerplate",
        },
      },
    },
  },
  {
    redisUrl: process.env.REDIS_URL,
    basePath: "/api",
    maxDuration: 60,
    verboseLogs: true,
  },
);

export { handler as GET, handler as POST };
