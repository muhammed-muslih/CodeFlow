import mongoose from "mongoose";
import { env } from "./env.js";
import { logger } from "@/utils/logger.js";

const connectDB = async (): Promise<void> => {
  if (!env.MONGO_URI) {
    logger.error("MONGO_URI not defined in .env");
    process.exit(1);
  }
  try {
    await mongoose.connect(env.MONGO_URI);
    logger.info("Database connection established");
  } catch (error) {
    logger.error("Database connection failed");
    process.exit(1);
  }
};
export default connectDB;
