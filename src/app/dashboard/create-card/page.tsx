"use client";
import { Template } from "@/components/Template";
import { TemplateGrid } from "@/components/Template/TemplateGrid";
import { Box, Flex, Stack, VStack } from "@chakra-ui/react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useForm } from "react-hook-form";
import { cardInferSchemaType } from "./schema";
import { FieldInputMaskController } from "@/components/FieldComponentMask";
import { FieldInputController } from "@/components/FieldInput/FieldInputController";
import { DefaultButton } from "@/components/Button";

export default function CreateCard() {
  const {
    watch,
    control,
    formState: { errors },
  } = useForm<cardInferSchemaType>();

  const { cardNumber, cvv, fullName, validDate } = watch();

  return (
    <Template shouldShowUser variant="secondary">
      <TemplateGrid w="100%" p="58px 95px 42px 96px !important">
        <Flex h="100%" w="100%" justifyContent={"center"}>
          <VStack
            maxW="973px"
            w="100%"
            bg="white"
            h="100%"
            borderRadius={"8px"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={"29px"}
            p="58px 95px 42px 96px"
          >
            <Cards
              number={cardNumber ?? ""}
              expiry={validDate ?? ""}
              cvc={cvv ?? ""}
              name={fullName ?? ""}
            />

            <VStack spacing={"40px"} as={"form"} w="100%">
              <Stack
                justifyContent={"center"}
                align={"center"}
                direction={"row"}
                spacing={"62px"}
                w="100%"
              >
                <Box maxW={"360px"} w="100%">
                  <FieldInputMaskController
                    placeholder="Número do cartão*"
                    control={control}
                    mask={"9999 9999 9999 9999"}
                    background="white"
                    border="1px solid #D2FFEC"
                    _hover={{
                      border: "1px solid #D2FFEC",
                    }}
                    name="cardNumber"
                    error={errors.cardNumber}
                  />
                </Box>

                <Box maxW={"360px"} w="100%">
                  <FieldInputMaskController
                    placeholder="Data de validade*"
                    control={control}
                    mask={"99/99"}
                    background="white"
                    border="1px solid #D2FFEC"
                    _hover={{
                      border: "1px solid #D2FFEC",
                    }}
                    name="validDate"
                    error={errors.validDate}
                  />
                </Box>
              </Stack>

              <Stack
                justifyContent={"center"}
                align={"center"}
                direction={"row"}
                w="100%"
                gap={"62px"}
              >
                <Box maxW={"360px"} w="100%">
                  <FieldInputController
                    placeholder="Nome e Sobrenome*"
                    control={control}
                    background="white"
                    border="1px solid #D2FFEC"
                    _hover={{
                      border: "1px solid #D2FFEC",
                    }}
                    name="fullName"
                    error={errors.fullName}
                  />
                </Box>

                <Box maxW={"360px"} w="100%">
                  <FieldInputMaskController
                    placeholder="Código de segurança*"
                    control={control}
                    mask={"999"}
                    background="white"
                    border="1px solid #D2FFEC"
                    _hover={{
                      border: "1px solid #D2FFEC",
                    }}
                    name="cvv"
                    error={errors.cvv}
                  />
                </Box>
              </Stack>

              <DefaultButton
                maxW="360px"
                w="100%"
                label="Continuar"
                variant="primary"
                alignSelf={"end"}
                ml="95px"
              />
            </VStack>
          </VStack>
        </Flex>
      </TemplateGrid>
    </Template>
  );
}
