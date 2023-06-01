import { api } from "@/libs/axios";
import { useQuery } from "react-query";

export interface Activity {
  alias: string;
  available_amount: number;
  cvu: string;
  id: number;
  user_id: number;
}

async function getAccount() {
  const { data } = await api.get<Activity>(`/api/account`);

  return data;
}

export function useGetAccount() {
  return useQuery(["getAccount"], () => getAccount(), {
    refetchOnWindowFocus: false,
  });
}
