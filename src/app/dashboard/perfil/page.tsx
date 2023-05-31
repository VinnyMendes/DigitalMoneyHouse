"use client";
import { Template } from "@/components/Template";
import { TemplateGrid } from "@/components/Template/TemplateGrid";
import {
  Flex,
  Box,
  Center,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputLeftElement,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import { DefaultButton } from "@/components/Button";
import { HiArrowRight, HiPencil } from "react-icons/hi";
import { MdContentCopy } from "react-icons/md";
import { use, useState } from "react";
import { FormProfileForm, TypeFormProfileForm } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useGetUser } from "@/query/use-get-user";
import { useSession } from "next-auth/react";
import { User } from "@/query/use-get-user";
import { useRouter } from "next/navigation";

export default function Home() {
  const [show, setShow] = useState(false);
  const handleClickShow = () => setShow(!show);

  const { push } = useRouter();

  const methods = useForm<TypeFormProfileForm>({
    resolver: zodResolver(FormProfileForm),
    mode: "onChange",
  });

  const { data: session } = useSession();

  const { data } = useGetUser({
    user_id: session?.user?.user_data?.id ?? 0,
  });

  console.log(data);

  return (
    <Template shouldShowUser variant="secondary">
      <TemplateGrid>
        <Flex
          position={"relative"}
          w="100%"
          h="100%"
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingBottom={"10px"}
          bg={"#EEEAEA"}
        >
          <Box alignItems={"start"}>
            <Text
              fontWeight="600"
              fontSize={{ base: "16px", md: "16px", lg: "16px" }}
              lineHeight={{ base: "16px", md: "16px", lg: "16px" }}
              py={"1rem"}
              textDecoration={"underline"}
              display={"flex"}
              flexDir={"row"}
              color={"#201F22"}
            >
              <HiArrowRight /> Perfil
            </Text>
          </Box>
          <Box display={"flex"} flexDir={"column"}>
            <Box
              height={{ base: "371px", md: "277px", lg: "277px" }}
              alignItems="baseline"
              width={{ base: "354px", md: "511px", lg: "1003px" }}
              padding={"0rem 1rem 0rem 1rem"}
              marginTop={"1rem"}
              marginRight={{ base: "0", md: "0", lg: "1rem" }}
              bg={"#ffffff"}
              boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
              borderRadius={"10px"}
            >
              <Text
                fontWeight="700"
                fontSize={"20px"}
                lineHeight={"23px"}
                py={{ base: "1rem", md: "0.5rem", lg: "0.5rem" }}
                borderBottom={"1px solid #CECECE"}
              >
                Seus dados
              </Text>
              <FormProvider {...methods}>
                <FormControl
                  isRequired
                  display={{ base: "", md: "flex", lg: "flex" }}
                  alignItems={"center"}
                  whiteSpace={"nowrap"}
                >
                  <FormLabel
                    fontSize={{ base: "16px", md: "16px", lg: "16px" }}
                    lineHeight={{
                      base: "21.79px",
                      md: "21.79px",
                      lg: "21.79px",
                    }}
                    marginBottom={"-10px"}
                    padding={"0"}
                  >
                    Email
                  </FormLabel>
                  <Input variant="flushed" /* placeholder={data?.email} */ />
                </FormControl>
                <FormControl
                  marginTop={"5px"}
                  isRequired
                  display={{ base: "", md: "flex", lg: "flex" }}
                  alignItems={"center"}
                  whiteSpace={"nowrap"}
                >
                  <FormLabel
                    fontSize={{ base: "16px", md: "16px", lg: "16px" }}
                    lineHeight={{
                      base: "21.79px",
                      md: "21.79px",
                      lg: "21.79px",
                    }}
                    marginBottom={"-10px"}
                    padding={"0"}
                  >
                    Nome e sobrenome
                  </FormLabel>
                  <InputGroup color={"#CECECE"}>
                    <Input
                      variant="flushed"
                      /* placeholder={`${data.firstname} ${data.lastname}`} */
                    />
                    <InputRightElement>
                      <HiPencil />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl
                  marginTop={"5px"}
                  isRequired
                  display={{ base: "", md: "flex", lg: "flex" }}
                  alignItems={"center"}
                  whiteSpace={"nowrap"}
                >
                  <FormLabel
                    fontSize={{ base: "16px", md: "16px", lg: "16px" }}
                    lineHeight={{
                      base: "21.79px",
                      md: "21.79px",
                      lg: "21.79px",
                    }}
                    marginBottom={"-10px"}
                    padding={"0"}
                  >
                    CPF
                  </FormLabel>
                  <InputGroup color={"#CECECE"}>
                    <Input variant="flushed" /* placeholder={data.dni} */ />
                    <InputRightElement>
                      <HiPencil />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl
                  marginTop={"5px"}
                  isRequired
                  display={{ base: "", md: "flex", lg: "flex" }}
                  alignItems={"center"}
                  whiteSpace={"nowrap"}
                >
                  <FormLabel
                    fontSize={{ base: "16px", md: "16px", lg: "16px" }}
                    lineHeight={{
                      base: "21.79px",
                      md: "21.79px",
                      lg: "21.79px",
                    }}
                    marginBottom={"-10px"}
                    padding={"0"}
                  >
                    Telefone
                  </FormLabel>
                  <InputGroup color={"#CECECE"}>
                    <Input variant="flushed" /* placeholder={data.phone} */ />
                    <InputRightElement>
                      <HiPencil />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl
                  marginTop={"5px"}
                  isRequired
                  display={{ base: "", md: "flex", lg: "flex" }}
                  alignItems={"center"}
                  whiteSpace={"nowrap"}
                >
                  <FormLabel
                    fontSize={{ base: "16px", md: "16px", lg: "16px" }}
                    lineHeight={{
                      base: "21.79px",
                      md: "21.79px",
                      lg: "21.79px",
                    }}
                    marginBottom={"-10px"}
                    padding={"0"}
                  >
                    Senha de acesso
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <Button
                        color={"#757474"}
                        h="1.75rem"
                        size="sm"
                        onClick={handleClickShow}
                      >
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputLeftElement>
                    <Input
                      variant="flushed"
                      placeholder="123456"
                      type={show ? "text" : "password"}
                      marginLeft={"6px"}
                    />
                    <InputRightElement color={"#CECECE"}>
                      <HiPencil />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </FormProvider>
            </Box>
            <DefaultButton
              variant="home2"
              label="Administrar meios de pagamento ->"
              h={"67px"}
              margin={"1rem 0rem 1rem 0rem"}
              borderRadius={"10px"}
              onClick={() => push("/dashboard/cards")}
            />
            <Box
              borderRadius="25px"
              height={{ base: "220px", md: "224px", lg: "246px" }}
              alignItems="baseline"
              borderWidth="1px"
              width={{ base: "354px", md: "511px", lg: "1003px" }}
              padding={"1.5rem"}
              marginBottom={"1rem"}
              bg={"#201F22"}
              textColor={"#ffffff"}
            >
              <Text
                fontWeight="400"
                fontSize={{ base: "14px", md: "14px", lg: "14px" }}
                lineHeight={{ base: "19px", md: "19px", lg: "19px" }}
                marginBottom={"20px"}
              >
                Copiar seu CVU ou alias para adicionar ou transferir valor a
                partir de outra conta
              </Text>
              <Box
                marginTop={"5px"}
                paddingBottom={"10px"}
                borderBottom={"1px solid #CECECE"}
              >
                <Box
                  display={"flex"}
                  flexDir={"row"}
                  justifyContent={"space-between"}
                  color={"#C1FD35"}
                >
                  <Text
                    fontSize={{ base: "20px", md: "20px", lg: "20px" }}
                    lineHeight={{
                      base: "23.54px",
                      md: "23.54px",
                      lg: "23.54px",
                    }}
                    marginBottom={"-10px"}
                    padding={"0"}
                  >
                    CVU
                  </Text>
                  <MdContentCopy size={"20"} />
                </Box>
                <Text
                  fontWeight="400"
                  fontSize={{ base: "16px", md: "16px", lg: "16px" }}
                  lineHeight={{ base: "21.8px", md: "21.8px", lg: "21.8px" }}
                >
                  0000002100075320000000
                </Text>
              </Box>
              <Box
                marginTop={"5px"}
                paddingBottom={"10px"}
                borderBottom={"1px solid #CECECE"}
              >
                <Box
                  display={"flex"}
                  flexDir={"row"}
                  justifyContent={"space-between"}
                  color={"#C1FD35"}
                >
                  <Text
                    fontSize={{ base: "20px", md: "20px", lg: "20px" }}
                    lineHeight={{
                      base: "23.54px",
                      md: "23.54px",
                      lg: "23.54px",
                    }}
                    marginBottom={"-10px"}
                    padding={"0"}
                  >
                    Alias
                  </Text>
                  <MdContentCopy size={"20"} />
                </Box>
                <Text
                  fontWeight="400"
                  fontSize={{ base: "16px", md: "16px", lg: "16px" }}
                  lineHeight={{ base: "21.8px", md: "21.8px", lg: "21.8px" }}
                >
                  estealiasnãoexiste
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </TemplateGrid>
    </Template>
  );
}
