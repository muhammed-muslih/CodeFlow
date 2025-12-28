import { pinoHttp } from "pino-http";
import { logger } from "@/utils/logger.js";

export const httpLogger = pinoHttp({
  logger,
  customLogLevel: (_req, res, _err) => {
    if (res.statusCode >= 500) return "error";
    if (res.statusCode >= 400) return "warn";
    return "info";
  },

  customSuccessMessage: (req, res) =>
    `${req.method} ${req.url} - ${res.statusCode}`,

  customErrorMessage: (req, res, _err) =>
    `${req.method} ${req.url} - ERROR ${res.statusCode}`,

  serializers: {
    req: () => undefined,
    res: () => undefined,
  },
});
