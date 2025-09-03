import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({ path: ".env.local" });

console.log(process.env.DATABASE_URL);

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
  schema: "./server/db/schemas/index.ts",
  out: "./server/db/migrations",
});
