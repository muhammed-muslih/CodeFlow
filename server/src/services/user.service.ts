import { User } from "@/models/user.model.js";

export const getUserByIdSafe = async (userId: string) => {
  return User.findById(userId).select("name email avatar provider");
};
