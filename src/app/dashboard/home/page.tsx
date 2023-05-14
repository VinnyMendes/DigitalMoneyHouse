"use client";
import { DefaultButton } from "@/components/Button";
import { Template } from "@/components/Template";
import { TemplateGrid } from "@/components/Template/TemplateGrid";
import { HStack, Stack, Flex, Text, Box, VStack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import FieldInput from "@/components/FieldInput";
import { AiOutlineSearch } from "react-icons/ai";

export default function Home() {
  return (
    <Template shouldShowUser variant="secondary">
      <TemplateGrid>
        <VStack spacing={"20px"} w="100%" align={"flex-start"}>
          <Flex
            background="#201F22"
            p={{
              base: "15px 23px 23px 22px",
              sm: "16px 19px 47px 27px",
              md: "32px 60px 47px 25px",
            }}
            flexDir={"column"}
            borderRadius={"8px"}
            w="100%"
          >
            <HStack
              spacing={"16px"}
              w="100%"
              align={"flex-end"}
              justifyContent={"flex-end"}
              fontSize={{ base: "12px", sm: "16px" }}
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

            <Box
              border="2px solid #C1FD35"
              px="20px"
              borderRadius="100px"
              background={"inherit"}
              fontSize={{ base: "24px", sm: "36px" }}
              lineHeight="49px"
              color={"#FFFF"}
              w="fit-content"
            >
              {"$ 6.97"}
            </Box>
          </Flex>

          <Stack
            spacing={"20px"}
            w="100%"
            direction={{ base: "column", md: "row" }}
          >
            <DefaultButton
              h={{ base: "67px", md: "85px", lg: "106px" }}
              label={"Carregar valor"}
              fontSize={{ base: "16px", sm: "24px" }}
            />

            <DefaultButton
              h={{ base: "67px", md: "85px", lg: "106px" }}
              label={"Pagar serviços"}
              fontSize={{ base: "16px", sm: "24px" }}
            />
          </Stack>

          <FieldInput border="1px solid #D2FFEC" name="search" />
        </VStack>
      </TemplateGrid>
    </Template>
  );
}
