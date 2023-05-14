"use client";
import { DefaultButton } from "@/components/Button";
import { Template } from "@/components/Template";
import { TemplateGrid } from "@/components/Template/TemplateGrid";
import { HStack, Stack, Flex, Link } from "@chakra-ui/react";
// import Link from "next/dist/client/link";

export default async function Home() {
  return (
    <Template shouldShowUser variant="secondary">
      <TemplateGrid>
        <Flex background="#201F22">
          <HStack
            spacing={"16px"}
            w="100%"
            align={"flex-end"}
            justifyContent={"flex-end"}
          >
            <Link
              href={"/"}
              color="#FFFF"
              style={{ textDecoration: "underline", color: "#FFFF" }}
            >
              Ver cartões
            </Link>

            <Link
              href={"/"}
              color="#FFFF"
              style={{ textDecoration: "underline", color: "#FFFF" }}
            >
              Ver CVU
            </Link>
          </HStack>
        </Flex>

        <Stack
          spacing={"20px"}
          w="100%"
          direction={{ base: "column", md: "row" }}
        >
          <DefaultButton
            h={{ base: "67px", md: "85px", lg: "106px" }}
            label={"Carregar valor"}
          />

          <DefaultButton
            h={{ base: "67px", md: "85px", lg: "106px" }}
            label={"Pagar serviços"}
          />
        </Stack>
      </TemplateGrid>
    </Template>
  );
}
