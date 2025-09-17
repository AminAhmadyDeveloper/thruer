import { fieldConfig } from "@autoform/zod";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { user } from "@/server/db/schemas";

export const loginSchema = createInsertSchema(user)
  .pick({
    email: true,
  })
  .extend({
    password: z
      .string()
      .min(8, "Password must be at least 6 characters long")
      .superRefine(
        fieldConfig({
          inputProps: { type: "password" },
        })
      ),
  });

export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = createInsertSchema(user)
  .pick({
    email: true,
    name: true,
  })
  .extend({
    password: z
      .string()
      .min(8, "Password must be at least 6 characters long")
      .superRefine(
        fieldConfig({
          inputProps: { type: "password" },
        })
      ),
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
