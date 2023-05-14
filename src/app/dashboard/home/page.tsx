"use client";
import { DefaultButton } from "@/components/Button";
import { Template } from "@/components/Template";
import { TemplateGrid } from "@/components/Template/TemplateGrid";
import { HStack, Stack, Flex, Text, Badge } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export default function Home() {
  return (
    <Template shouldShowUser variant="secondary">
      <TemplateGrid>
        <Flex
          background="#201F22"
          p={{
            base: "15px 23px 23px 22px",
            sm: "16px 19px 47px 27px",
            md: "32px 60px 47px 25px",
          }}
          flexDir={"column"}
        >
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

          <Text
            color="#FFFF"
            fontWeight="700"
            fontSize="16px"
            lineHeight="22px"
            py={"2rem"}
          >
            Dinheiro disponível
          </Text>

          <Badge
            border="2px solid #C1FD35"
            border-radius="100px"
            background={"inherit"}
            maxW={"285px"}
            color={"#FFFF"}
            w="100%"
          >
            {"$ 6.98"}
          </Badge>
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
