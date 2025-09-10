import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import type { AllPermissions } from "@/server/auth/permissions";

export const role = pgTable("roles", {
  createdAt: timestamp("created_at").$defaultFn(() => new Date()),
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  permissions: text("permissions")
    .array()
    .$type<AllPermissions[]>()
    .notNull()
    .default([]),
  updatedAt: timestamp("updated_at").$defaultFn(() => new Date()),
});
