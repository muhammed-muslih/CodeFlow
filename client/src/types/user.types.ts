export interface UserSummary {
  _id: string;
  name: string;
  email: string;
}

export interface User {
  _id: string;
  name: string;
  email?: string | null;
  avatar?: string | null;
  provider: "local" | "github";
}
