import { useQueryUserById } from "@/query/user-get-user-data";
import { Badge, Flex, FlexProps, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FC, useMemo } from "react";

export type Variants = "primary" | "secondary";

type HeaderProps = {
  variant?: Variants;
  shouldShowUser?: boolean;
} & Omit<FlexProps, "variant">;

export const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const { variant = "primary", shouldShowUser } = props;

  const { data: user } = useQueryUserById();

  const stylesByVariant = useMemo((): Record<Variants, HeaderProps> => {
    return {
      primary: {
        background: "green.500",
        height: "64px",
        padding: "15.5px 20px",
      },

      secondary: {
        background: "gray.500",
        height: "64px",
        padding: "20px",
      },
    };
  }, []);

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      {...props}
      {...stylesByVariant[variant]}
    >
      {variant === "primary" && (
        <Image alt="logo" src="/logo.svg" width={86} height={33} />
      )}

      {variant === "secondary" && (
        <Image alt="logo" src="/logo-alt.svg" width={86} height={33} />
      )}

      {shouldShowUser && user && (
        <HStack spacing={"1rem"}>
          <Badge
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
            borderRadius="12px"
            h="43px"
            w="40px"
            background="green.500"
            alignItems={"center"}
            fontSize={"20px"}
            color={"#201F22"}
            fontWeight={700}
          >{`${user.firstname[0].toUpperCase()} ${user.lastname[0].toUpperCase()}`}</Badge>

          <Text
            fontWeight={700}
            fontSize={"16px"}
            color={"#FFFF"}
          >{`Olá, ${user.firstname} ${user.lastname}`}</Text>
        </HStack>
      )}
    </Flex>
  );
};
