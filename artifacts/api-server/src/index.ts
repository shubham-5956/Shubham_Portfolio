import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { logger } from "./lib/logger";

const rawPort = process.env["PORT"] ?? "3001";
const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    logger.info({ port }, "Server listening");
  });
}

export default app;