import pino from "pino";
import { env } from "@/config/env.js";

const isDev = env.NODE_ENV === "development";

export const logger = pino({
  level: isDev ? "debug" : "info",

  transport: isDev
    ? {
        target: "pino-pretty",
        options: {
          colorize: true,
          levelFirst: true,
          translateTime: "HH:MM:ss",
          ignore: "pid,hostname",
          customColors: "info:green,warn:yellow,error:red,debug:blue",
        },
      }
    : undefined,
});
