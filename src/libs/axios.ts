import axios, { AxiosError } from "axios";
import { signOut } from "next-auth/react";

interface ErrorAPI {
  error: string;
}

export const api = axios.create({
  baseURL: process.env.NEXT_API_URL || "https://digitalmoney.ctd.academy",
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
