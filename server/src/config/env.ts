import "dotenv/config";

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  PORT: Number(process.env.PORT) ?? 3000,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET ?? "jwttokensecret",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? "15m",
};
