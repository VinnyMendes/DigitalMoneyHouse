"use client";
import { Flex, FlexProps } from "@chakra-ui/react";
import Image from "next/image";
import { FC, useMemo } from "react";

type Variants = "primary" | "secondary";

type HeaderProps = {
  variant?: Variants;
} & Omit<FlexProps, "variant">;

export const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const { variant = "primary" } = props;

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
    </Flex>
  );
};
