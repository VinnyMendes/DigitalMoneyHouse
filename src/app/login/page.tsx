"use client";
import { DefaultButton } from "@/components/Button";
import { FieldInputController } from "@/components/FieldInput/FieldInputController";
import { Template } from "@/components/Template";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSession, signIn, signOut } from "next-auth/react";
import { useForm } from "react-hook-form";
import { loginSchema, zodInfer } from "./schema";

export default function Page() {
  getSession().then((data) => console.log(data?.user));

  const onSubmit = async (data: zodInfer) => {
    const response = await signIn("credentials", {
      email: data.login,
      password: data.password,
      redirect: false,
    });

    if (response?.error) {
      console.log("errouuuu");
    }

    //  if (response?.ok) {
    //    return push("/");
    //  }
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<zodInfer>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  console.log(errors);

  return (
    <Template>
      <Flex
        as="form"
        flexDir={"column"}
        onSubmit={handleSubmit(onSubmit)}
        h="full"
        w="100%"
        background="#272727"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={"20px"} maxW={"360px"} w="100%">
          <FieldInputController
            placeholder="E-mail"
            name="login"
            type="email"
            control={control}
          />

          {/* <FieldInputController
            placeholder="Password"
            control={control}
            name="password"
            type="password"
          /> */}

          <DefaultButton
            type="submit"
            isLoading={isSubmitting}
            label="Continuar"
          />

          <DefaultButton
            variant="secondary"
            isLoading={isSubmitting}
            onClick={() => signOut()}
            label="Criar conta"
          >
            Sair
          </DefaultButton>
        </VStack>
      </Flex>
    </Template>
  );
}
