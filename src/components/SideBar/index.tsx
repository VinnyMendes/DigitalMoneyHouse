import { Stack } from "@chakra-ui/react";
import React from "react";

interface SideBarProps {}

export const SideBar = ({}: SideBarProps) => {
  return (
    <Stack
      w={{ base: "unset", sm: "221px", lg: "276px" }}
      display={{ base: "none", sm: "block" }}
      pl={"40px"}
      pt="49px"
      h="full"
      background={"green.500"}
    />
  );
};
