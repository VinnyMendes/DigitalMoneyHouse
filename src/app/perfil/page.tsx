"use client";
import { Template } from "@/components/Template";
import {
  Flex,
  Box,
  Center,
  Text,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { DefaultButton } from "@/components/Button";
import { HiArrowRight, HiPencil } from "react-icons/hi";
import { MdContentCopy } from "react-icons/md";

export default function Home() {
  return (
    <Template variant="secondary">
      <Flex
        position={"relative"}
        w="100%"
        h="100%"
        flexDir={"column"}
        justifyContent={""}
        alignItems={"center"}
        paddingBottom={"10px"}
        bg={"#EEEAEA"}
      >
        <Text
          fontWeight="600"
          fontSize={{ base: "16px", md: "16px", lg: "16px" }}
          lineHeight={{ base: "16px", md: "16px", lg: "16px" }}
          py={"1rem"}
          textDecoration={"underline"}
        >
          Perfil
        </Text>
        <Box
          display={"flex"}
          flexDir={{ base: "column", md: "column", lg: "row" }}
        >
          <Box
            height={{ base: "100%", md: "100%", lg: "100%" }}
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
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" />
              <HiPencil />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" />
            </FormControl>
          </Box>
          <DefaultButton
            variant="home2"
            label="Administrar meios de pagamento ->"
            h={"67px"}
            borderRadius={"10px"}
          />
          <Box
            borderRadius="25px"
            height={{ base: "190px", md: "224px", lg: "246px" }}
            alignItems="baseline"
            borderWidth="1px"
            width={{ base: "354px", md: "597px", lg: "500px" }}
            padding={"1rem"}
            marginBottom={"1rem"}
            bg={"#ffffff"}
          >
            <Text
              fontWeight="700"
              fontSize={{ base: "24px", md: "36px", lg: "36px" }}
              lineHeight={{ base: "18px", md: "36px", lg: "49px" }}
              py={"1rem"}
              borderBottom={"2px solid #C1FD35"}
            >
              Pagamento de serviços
            </Text>
            <Text
              fontWeight="400"
              fontSize={{ base: "15px", md: "20px", lg: "20px" }}
              lineHeight={{ base: "20.43px", md: "27.24px", lg: "27.24px" }}
              py={"1rem"}
            >
              Pague mensalmente por serviços com apenas 3 clicks. Fácil, rápido
              e conveniente. Esqueça os boletos em papel.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Template>
  );
}
