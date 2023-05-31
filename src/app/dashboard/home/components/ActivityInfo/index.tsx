"use client";
import { Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { BsCircleFill } from "react-icons/bs";
import { Activity } from "@/query/use-get-activity";

interface ActivityInfoProps {
  activity: Activity;
}

const transferTypes = {
  transfer: "transferiu",
  deposit: "adicionou valor",
};

export const ActivityInfo = (props: ActivityInfoProps) => {
  return (
    <>
      <HStack
        spacing={"16px"}
        w="100%"
        align={"center"}
        justifyContent={"space-between"}
        fontSize={{ base: "14px", sm: "16px" }}
      >
        <Flex gap={4} align="center" justifyContent="center" py={"1.5rem"}>
          <BsCircleFill fontSize={"2em"} color="#C1FD35" />
          <Text>
            Você{" "}
            {props.activity.origin === props.activity.destination
              ? transferTypes["deposit"]
              : props.activity.origin === String(props.activity.account_id)
              ? `transferiu para ${props.activity.destination}`
              : `recebeu uma transferência de ${props.activity.origin}`}
          </Text>
        </Flex>

        <VStack>
          <Text>R${props.activity.amount}</Text>
          <Text>{props.activity.dated}</Text>
        </VStack>
      </HStack>
      <Divider borderBottomColor={"blackAlpha.600"} />
    </>
  );
};
