"use client";
import { Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ActivityInfo } from "../ActivityInfo";
import { useGetActivity } from "@/query/use-get-activity";
import { BsCircleFill } from "react-icons/bs";

export const RecentActivity = () => {
  const { data: session } = useSession();
  const { data } = useGetActivity({
    account_id: session?.user?.user_info?.id ?? 0,
  });
  const router = useRouter();

  return (
    <Flex
      background="#FFF"
      p={{
        base: "15px 23px 23px 22px",
        sm: "16px 19px 47px 27px",
        md: "32px 60px 47px 25px",
      }}
      flexDir={"column"}
      borderRadius={"8px"}
      w="100%"
    >
      <Text color="#201F22" fontWeight="700" fontSize="16px" lineHeight="22px" py={"2rem"}>
        Sua atividade
      </Text>

      <Divider borderBottomColor={"blackAlpha.600"} />

      {data?.map((activity, index) => {
        return <ActivityInfo key={activity.id} activity={activity} />;
      })}
      <HStack spacing={"16px"} w="100%" align={"center"} justifyContent={"space-between"} fontSize={{ base: "14px", sm: "16px" }}>
        <Flex gap={4} align="center" justifyContent="center" py={"1.5rem"}>
          <BsCircleFill fontSize={"2em"} color="#C1FD35" />
          <Text>Você transferiu para Rodrigo</Text>
        </Flex>
        <Flex flexDirection={"column"} align={"flex-end"}>
          <Text>R$1.265,57</Text>
          <Text color={"blackAlpha.600"}>sábado</Text>
        </Flex>
      </HStack>
      <Divider borderBottomColor={"blackAlpha.600"} />
      <Flex
        justify={"space-between"}
        align={"center"}
        onClick={() => router.push("/dashboard/activity")}
        cursor={"pointer"}
        _hover={{ textDecoration: "underline" }}
      >
        <Text color="#201F22" fontWeight="700" fontSize="16px" lineHeight="22px" py={"2rem"}>
          Ver toda sua atividade
        </Text>
        <AiOutlineArrowRight size={"1.6rem"} color="#3A393E" />
      </Flex>
    </Flex>
  );
};
