import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export const theme: ThemeConfig = extendTheme({
  colors: {
    green: {
      500: "#C1FD35",
    },
    gray: {
      500: "#3A393E",
    },
  },
  useSystemColorMode: true,
  components: {},
  styles: {
    global: (props: StyleFunctionProps) => ({
      html: {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
        overflow: "auto",
      },
    }),
  },
});
