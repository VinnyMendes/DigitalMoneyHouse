"use client";
import { FieldInputController } from "@/components/FieldInput/FieldInputController";
import { Template } from "@/components/Template";
import { Button, Flex } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSession, signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

interface FormLogin {
  login: string;
  password: string;
}

export default function Page() {
  getSession().then((data) => console.log(data?.user));

  const onSubmit = async (data: FormLogin) => {
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
  } = useForm<FormLogin>({
    // resolver: zodResolver(schema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  return (
    <Template>
      <Flex
        as="form"
        flexDir={"column"}
        onSubmit={handleSubmit(onSubmit)}
        h="full"
      >
        <FieldInputController
          placeholder="E-mail"
          name="login"
          type="email"
          control={control}
        />

        <FieldInputController
          placeholder="Password"
          control={control}
          name="password"
          type="password"
        />

        <Button type="submit" isLoading={isSubmitting}>
          Entrar
        </Button>
      </Flex>
    </Template>
  );
}
