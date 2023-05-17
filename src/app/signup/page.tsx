"use client";
import { DefaultButton } from "@/components/Button";
import { FieldInputController } from "@/components/FieldInput/FieldInputController";
import { Template } from "@/components/Template";
import { Text, Flex, VStack, useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signupSchema, signupZodInfer } from "./schema";
import { useRouter } from "next/navigation";
import { useCreateUser } from "@/query/create-user";
import { FieldInputMaskController } from "@/components/FieldComponentMask";

export default function SignupPage() {
  // const { push } = useRouter();
  const { mutateAsync, error } = useCreateUser();
  const toast = useToast();

  const onSubmit = async (userData: signupZodInfer) => {
    try {
      mutateAsync(userData);
      toast({ title: "Sucesso", description: "Usuário criado.", status: "success", duration: 4000, isClosable: true });
      // return push("/signup-success");
    } catch (error) {
      toast({ title: "Erro", description: "Falha ao criar usuário", status: "error", duration: 4000, isClosable: true });
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<signupZodInfer>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dni: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  });

  return (
    <Template>
      <Flex
        as="form"
        flexDir={"column"}
        onSubmit={handleSubmit(onSubmit)}
        h="100%"
        w="100%"
        background="#272727"
        alignItems="center"
        justifyContent="center"
        p={{ base: "45px", sm: "unset" }}
      >
        <VStack spacing={"20px"} maxW={"360px"} w="100%">
          <FieldInputController placeholder="Nome*" name="firstName" type="text" control={control} error={errors.firstName} />
          {errors.firstName && <Text color={"red"}>{errors.firstName.message}</Text>}
          <FieldInputController placeholder="Sobrenome*" name="lastName" type="text" control={control} error={errors.lastName} />
          {errors.lastName && <Text color={"red"}>{errors.lastName.message}</Text>}
          <FieldInputController placeholder="Telefone*" name="phone" type="text" control={control} error={errors.phone} />
          {errors.phone && <Text color={"red"}>{errors.phone.message}</Text>}
          <FieldInputMaskController mask={"999.999.999-99"} placeholder="CPF*" name="dni" type="text" control={control} error={errors.dni} />
          {errors.dni && <Text color={"red"}>{errors.dni.message}</Text>}
          <FieldInputController placeholder="e-mail*" name="email" type="email" control={control} error={errors.email} />
          {errors.email && <Text color={"red"}>{errors.email.message}</Text>}
          <FieldInputController placeholder="Senha*" control={control} name="password" type="password" error={errors.password} />
          <FieldInputController
            placeholder="Confirme a senha*"
            name="confirmPassword"
            type="password"
            control={control}
            error={errors.confirmPassword}
          />
          {errors.confirmPassword && <Text color={"red"}>{errors.confirmPassword.message}</Text>}
          <DefaultButton variant="primary" label="Criar conta" isLoading={isSubmitting} type="submit" />
        </VStack>
      </Flex>
    </Template>
  );
}
