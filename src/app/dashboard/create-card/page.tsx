"use client";
import { Template } from "@/components/Template";
import { TemplateGrid } from "@/components/Template/TemplateGrid";
import { Box, Flex, Stack, VStack } from "@chakra-ui/react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useForm } from "react-hook-form";
import { cardInferSchemaType, cardSchema } from "./schema";
import { FieldInputMaskController } from "@/components/FieldComponentMask";
import { FieldInputController } from "@/components/FieldInput/FieldInputController";
import { DefaultButton } from "@/components/Button";
import { useCreateCard } from "@/query/use-mutate-ceate-card";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormInput {
  cod: string;
  expiration_date: string;
  first_last_name: string;
  number_id: string;
}

export default function CreateCard() {
  const {
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(cardSchema),
    defaultValues: {
      cod: "",
      expiration_date: "",
      first_last_name: "",
      number_id: "",
    },
  });

  console.log(errors);
  const { cod, expiration_date, first_last_name, number_id } = watch();

  const mutateCreateCard = useCreateCard();

  const { data } = useSession();

  const submitForm = async (formData: cardInferSchemaType) => {
    try {
      if (data?.user?.id) {
        mutateCreateCard.mutateAsync({
          ...formData,
          account_id: data?.user.id,
        });
      }
    } catch (error: any) {}
  };

  return (
    <Template shouldShowUser variant="secondary">
      <TemplateGrid>
        <Flex
          h="100%"
          w="100%"
          justifyContent={"center"}
          p={{
            base: "20px 20px 61px 20px",
            sm: "68px 52px 85px 50px",
            lg: "58px 95px 42px 95px",
          }}
        >
          <VStack
            maxW="973px"
            w="100%"
            bg="white"
            h="100%"
            borderRadius={"8px"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={"29px"}
            p={{
              base: "22px 23px 26px 19px",
              sm: "48px 79px 34px 76px",
              lg: "30px 95px 31px 96px",
            }}
          >
            <Cards
              number={number_id ?? ""}
              expiry={expiration_date ?? ""}
              cvc={cod ?? ""}
              name={first_last_name ?? ""}
            />

            <VStack
              spacing={{ base: "14px", md: "40px" }}
              as={"form"}
              w="100%"
              onSubmit={handleSubmit(submitForm as any)}
            >
              <Stack
                justifyContent={"center"}
                align={"center"}
                direction={{ base: "column", md: "row" }}
                spacing={{ base: "10px", md: "62px" }}
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
                    name="number_id"
                    error={errors.number_id}
                  />
                </Box>

                <Box maxW={"360px"} w="100%">
                  <FieldInputMaskController
                    placeholder="Data de validade*"
                    control={control}
                    mask={"99/9999"}
                    background="white"
                    border="1px solid #D2FFEC"
                    _hover={{
                      border: "1px solid #D2FFEC",
                    }}
                    name="expiration_date"
                    error={errors.expiration_date}
                  />
                </Box>
              </Stack>

              <Stack
                justifyContent={"center"}
                align={"center"}
                direction={"row"}
                w="100%"
                gap={{ base: "14px", md: "62px" }}
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
                    name="first_last_name"
                    error={errors.first_last_name}
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
                    name="cod"
                    error={errors.cod}
                  />
                </Box>
              </Stack>

              <DefaultButton
                maxW="360px"
                w="100%"
                label="Continuar"
                variant="primary"
                alignSelf={"end"}
                type="submit"
              />
            </VStack>
          </VStack>
        </Flex>
      </TemplateGrid>
    </Template>
  );
}
