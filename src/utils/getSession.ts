"use client";
import { getSession } from "next-auth/react";

export const getSessionClient = async () => {
  const session = await getSession();
  const user = session?.user;
  return user;
};
