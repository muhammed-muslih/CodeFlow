import axios from "axios";
import { env } from "@/config/env.js";
import { AppError } from "@/utils/AppError.js";

export interface GitHubUser {
  id: number;
  login: string;
  email: string | null;
  avatar_url: string;
}

export const getGitHubUser = async (code: string): Promise<GitHubUser> => {
  // Exchange code for access token
  const tokenResponse = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    },
    {
      headers: { Accept: "application/json" },
    },
  );

  const accessToken = tokenResponse.data.access_token;

  if (!accessToken) {
    throw new AppError("GitHub OAuth failed", 401);
  }

  // Fetch user profile
  const userResponse = await axios.get<GitHubUser>(
    "https://api.github.com/user",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return userResponse.data;
};
