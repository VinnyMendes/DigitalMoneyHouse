import { api } from "@/libs/axios";
import { useQuery } from "react-query";

export interface User {
  dni: number;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  phone: string;
}

interface Params {
  user_id: number;
}

async function getUser(params: Params): Promise<User[]> {
  const { data } = await api.get<User[]>(`/api/users/${params.user_id}`);

  return data;
}

export function useGetUser(params: Params) {
  return useQuery(["getUser", params], () => getUser(params), {
    refetchOnWindowFocus: false,
  });
}
