"use client";
import { Divider, Flex, Text } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ActivityInfo } from "../ActivityInfo";
import { useGetActivity } from "@/query/use-get-activity";

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
      <Text
        color="#201F22"
        fontWeight="700"
        fontSize="16px"
        lineHeight="22px"
        py={"2rem"}
      >
        Sua atividade
      </Text>

      <Divider borderBottomColor={"blackAlpha.600"} />

      {data?.map((activity, index) => {
        return <ActivityInfo key={activity.id} activity={activity} />;
      })}

      <Flex
        justify={"space-between"}
        align={"center"}
        onClick={() => router.push("/dashboard/activity")}
        cursor={"pointer"}
        _hover={{ textDecoration: "underline" }}
      >
        <Text
          color="#201F22"
          fontWeight="700"
          fontSize="16px"
          lineHeight="22px"
          py={"2rem"}
        >
          Ver toda sua atividade
        </Text>
        <AiOutlineArrowRight size={"1.6rem"} color="#3A393E" />
      </Flex>
    </Flex>
  );
};
