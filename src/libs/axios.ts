import { getSessionClient } from "@/utils/getSession";
import axios, { AxiosError } from "axios";
import { signOut, useSession } from "next-auth/react";

interface ErrorAPI {
  error: string;
}

export const useAxiosInstance = async () => {
  const api = axios.create({
    baseURL: process.env.NEXT_API_URL || "https://digitalmoney.ctd.academy",
  });

  const session = await getSessionClient();

  api.interceptors.request.use((config) => {
    if (session) {
      config.headers.Authorization = `${session.token}`;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ErrorAPI>) => {
      if (
        error?.response?.status === 401 &&
        error?.response?.data.error.includes("expired")
      ) {
        signOut({ redirect: true, callbackUrl: "/" });
      }

      return Promise.reject(error);
    }
  );

  return api;
};
