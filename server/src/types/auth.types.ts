export interface JwtPayload {
  userId: string;
  email?: string;
}

export interface GitHubUser {
  id: number;
  login: string;
  email: string | null;
  avatar_url: string;
}
