import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

type TemplateProps = {
  children: ReactNode;
} & BoxProps;

export const Template = (props: TemplateProps) => {
  const { children, ...rest } = props;

  return (
    <Box h="calc(100vh - 128px)" {...rest}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
