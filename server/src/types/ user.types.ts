export interface UserPayload {
  id: string;
  name: string;
  email?: string | null;
  avatar?: string | null;
  provider: "local" | "github";
}
