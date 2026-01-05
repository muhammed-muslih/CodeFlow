import express from "express";
import cors from "cors";
import { httpLogger } from "@/utils/loggerHttp.js";
import { errorHandler } from "./middleware/error.middleware.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use(httpLogger);

app.get("/", (_req, res) => {
  res.send("CodeFlow API running");
});

app.use(errorHandler);

export { app };
