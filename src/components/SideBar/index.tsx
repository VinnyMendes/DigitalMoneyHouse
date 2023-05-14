"use client";
import { Stack, VStack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { Link } from "@chakra-ui/next-js";

interface SideBarProps {}

interface Options {
  label: string;
  path: string;
}

export const SideBar = ({}: SideBarProps) => {
  const sideBarItems: Options[] = useMemo(() => {
    return [
      {
        label: "Início",
        path: "/dashboard/home",
      },
      {
        label: "Atividade",
        path: "/",
      },
      {
        label: "Seu perfil",
        path: "/",
      },
      {
        label: "Carregar valor",
        path: "/",
      },
      {
        label: "Pagar serviços",
        path: "/",
      },
      {
        label: "Cartões",
        path: "/",
      },
      {
        label: "Encerrar sessão",
        path: "/",
      },
    ];
  }, []);

  const pathname = usePathname();

  return (
    <Stack
      w={{ base: "unset", sm: "221px", lg: "276px" }}
      display={{ base: "none", sm: "block" }}
      pl={"40px"}
      pt="49px"
      h="full"
      background={"green.500"}
    >
      <VStack spacing={"1rem"} align={"flex-start"}>
        {sideBarItems.map((item, index) => {
          return (
            <Link
              fontWeight={pathname === item.path ? "800" : "600"}
              fontSize={"17px"}
              key={`sidebar-item-${index}`}
              color="#201F22"
              href={item.path}
              _hover={{
                textDecoration: "none",
                color: "#201f22d8",
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </VStack>
    </Stack>
  );
};
