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

export interface UserData {
  dni: number;
  email: string;
  firstname: string;
  id: number;
  lastname: string;
  phone: string;
}

async function QueryUserById() {
  const session = await getSession();
  const user = session?.user;

  const { data: userQuery } = await api.get<UserResponse>("/api/account", {
    headers: {
      Authorization: `${user?.token}`,
    },
  });

  const { data } = await api.get<UserData>(`/api/users/${userQuery?.user_id}`, {
    headers: {
      Authorization: `${user?.token}`,
    },
    data: {
      id: userQuery?.user_id,
    },
  });

  return data;
}

export function useQueryUserById() {
  return useQuery(["query-by-id"], () => QueryUserById(), {
    retry: false,
    refetchOnWindowFocus: false,
  });
}
