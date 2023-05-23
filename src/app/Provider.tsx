"use client";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { Open_Sans } from "next/font/google";
import { CacheProvider } from "@chakra-ui/next-js";

interface Props {
  children: React.ReactNode;
}

const openSans = Open_Sans({ subsets: ["latin"] });

const Provider = ({ children }: Props) => {
  const queryClient = new QueryClient();

  return (
    <CacheProvider>
      <QueryClientProvider client={queryClient}>
        <style jsx global>
          {`
            :root {
              --font-rubik: ${openSans.style.fontFamily};
            }
          `}
        </style>
        <ChakraProvider theme={theme}>
          <SessionProvider>{children}</SessionProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </CacheProvider>
  );
};

export default Provider;
