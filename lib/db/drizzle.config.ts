import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";
import path from "path";

// Correct location of the .env file
const envPath = path.resolve(__dirname, "../../artifacts/api-server/.env");

console.log("Loading env from:", envPath);

const result = dotenv.config({
  path: envPath,
});

console.log(result);
console.log("DATABASE_URL =", process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing");
}

// export default defineConfig({
//   schema: path.join(__dirname, "src/schema/index.ts"),
//   dialect: "postgresql",
//   dbCredentials: {
//     url: process.env.DATABASE_URL,
//   },
// });

const schemaPath = path.resolve(__dirname, "src/schema/index.ts");

console.log("Schema path:", schemaPath);

export default defineConfig({
  schema: schemaPath,
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});