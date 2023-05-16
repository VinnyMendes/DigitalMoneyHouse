"use client";
import { signupZodInfer } from "@/app/signup/schema";
import { api } from "@/libs/axios";
import { useMutation, useQuery } from "react-query";

interface CreatedUserResponse {
  account_id: 0;
  email: string;
  user_id: 0;
}

type UserData = Omit<signupZodInfer, "confirmPassword">;

export async function CreateUser(userData: UserData) {
  await api.post<CreatedUserResponse>("/api/users/", userData);
}

export function useCreateUser() {
  return useMutation(CreateUser);
}
