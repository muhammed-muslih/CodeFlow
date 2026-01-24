import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { httpLogger } from "@/utils/loggerHttp.js";
import { errorHandler } from "@/middleware/error.middleware.js";
import { AppError } from "./utils/AppError.js";
import { env } from "./config/env.js";
import authRoutes from "@/routes/auth.routes.js";
import projectRoutes from "@/routes/project.routes.js";
import { protect } from "./middleware/auth.middleware.js";
import { csrfProtect } from "./middleware/csrf.middleware.js";

const app = express();

app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(httpLogger);

app.use("/api/auth", authRoutes);
app.use("/api/projects", protect, csrfProtect, projectRoutes);

app.get("/", (_req, res) => {
  res.send("Hello from CodeFlow");
});

//catch not founded routes and forwards to error handlers
app.use((_req, _res, next) => {
  next(new AppError("Not Found", 404));
});

app.use(errorHandler);

export { app };
