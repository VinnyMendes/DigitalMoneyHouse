"use client";
import { api } from "@/libs/axios";
import { getSession } from "next-auth/react";
import { useQuery } from "react-query";

interface UserResponse {
  alias: string;
  available_amount: number;
  cvu: string;
  id: number;
  user_id: number;
}

async function queryUserByJWT() {
  const session = await getSession();
  const user = session?.user;

  const { data } = await api.get<UserResponse>("/api/account", {
    headers: {
      Authorization: `${user?.token}`,
    },
  });

  return data;
}

export function useQueryUserByJWT() {
  return useQuery(["query-by-jwt"], () => queryUserByJWT());
}
