import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

// Resolve __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load the API server .env
dotenv.config({
  path: path.resolve(__dirname, "../../../artifacts/api-server/.env"),
});

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Please check artifacts/api-server/.env",
  );
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, {
  schema,
});

export * from "./schema";