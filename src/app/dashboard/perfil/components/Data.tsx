import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { HiPencil } from "react-icons/hi";
import { FormProfileForm, TypeFormProfileForm } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";

export default function Data() {
  const [show, setShow] = useState(false);
  const handleClickShow = () => setShow(!show);

  const methods = useForm<TypeFormProfileForm>({
    resolver: zodResolver(FormProfileForm),
    mode: "onChange",
  });

  return (
    <Box
      height={{ base: "371px", md: "371px", lg: "371px" }}
      alignItems="baseline"
      width={{ base: "354px", md: "597px", lg: "500px" }}
      padding={"0rem 1rem 0rem 1rem"}
      marginTop={"1rem"}
      marginRight={{ base: "0", md: "0", lg: "1rem" }}
      bg={"#ffffff"}
      boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
      borderRadius={"10px"}
    >
      <Text
        fontWeight="700"
        fontSize={{ base: "24px", md: "36px", lg: "36px" }}
        lineHeight={{ base: "18px", md: "36px", lg: "49px" }}
        py={"1rem"}
        borderBottom={"1px solid #CECECE"}
        marginBottom={"1rem"}
      >
        Seus dados
      </Text>
      <FormProvider {...methods}>
        <FormControl isRequired>
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
        <FormControl marginTop={"5px"} isRequired>
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
        <FormControl marginTop={"5px"} isRequired>
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
        <FormControl marginTop={"5px"} isRequired>
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
        <FormControl marginTop={"5px"} isRequired>
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
  );
}
