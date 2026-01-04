import { app } from "@/app.js";
import { env } from "@/config/env.js";
import { logger } from "@/utils/logger.js";
import connectDB from "./config/db.js";

const startServer = async () => {
  await connectDB();

  app.listen(env.PORT, () => {
    logger.info(
      `🚀 Server running on port ${env.PORT} in ${env.NODE_ENV.toUpperCase()} mode`,
    );
  });
};

startServer();
