import { useQueryUserById } from "@/query/user-get-user-data";
import { Badge, Flex, FlexProps, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FC, useMemo } from "react";

type Variants = "primary" | "secondary";

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
        background: "#C1FD35",
        height: "64px",
        padding: "15.5px 20px",
      },

      secondary: {
        background: "#201F22",
        height: "64px",
        padding: "20px",
      },
    };
  }, []);

  return (
    <Flex {...props} {...stylesByVariant[variant]}>
      <Image alt="logo" src="/logo.svg" width={86} height={33} />

      {shouldShowUser && user && (
        <HStack>
          <Badge
            borderRadius="12px"
            height="43px"
          >{`${user.firstname[0].toUpperCase()} ${user.lastname[0].toUpperCase()}`}</Badge>

          <Text>{`Olá, ${user.firstname} ${user.lastname}`}</Text>
        </HStack>
      )}
    </Flex>
  );
};
