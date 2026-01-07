import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { httpLogger } from "@/utils/loggerHttp.js";
import { errorHandler } from "@/middleware/error.middleware.js";
import authRoutes from "@/routes/auth.routes.js";
import { AppError } from "./utils/AppError.js";
import { csrfProtect } from "@/middleware/csrf.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(httpLogger);

// public auth routes (NO CSRF)
app.use("/api/auth", authRoutes);

// protected routes (CSRF REQUIRED)

app.get("/", (_req, res) => {
  res.send("Hello from CodeFlow");
});

//catch not founded routes and forwards to error handlers
app.use((_req, _res, next) => {
  next(new AppError("Not Found", 404));
});

app.use(errorHandler);

export { app };
