"use client";
import { api } from "@/libs/axios";
import { useMutation } from "react-query";

interface CreateCardResponse {
  account_id: number;
  cod: number;
  expiration_date: string;
  first_last_name: string;
  id: number;
  number_id: number;
}

export type UserDataOutput = {
  cod: number;
  expiration_date: string;
  first_last_name: string;
  number_id: number;
  account_id: string;
};

export async function CreateCard(userData: UserDataOutput) {
  await api.post<CreateCardResponse>(
    `/api/accounts/${userData.account_id}/cards`,
    userData
  );
}

export function useCreateCard() {
  return useMutation(CreateCard);
}
