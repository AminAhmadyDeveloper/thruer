import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/server/db/schemas";

dotenv.config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL || "");

export const database = drizzle({ client: sql, schema });
