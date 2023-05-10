import { Button, ButtonProps } from "@chakra-ui/react";
import { FC, useMemo } from "react";

type Variants = "primary" | "secondary";

interface DefaultButtonProps extends Omit<ButtonProps, Variants> {
  label: string;
  variant?: Variants;
}

export const DefaultButton: FC<DefaultButtonProps> = (
  props: DefaultButtonProps
) => {
  const { label, variant = "primary", ...rest } = props;

  const stylesByVariant = useMemo((): Record<Variants, ButtonProps> => {
    return {
      primary: {
        background: "#C1FD35",
        border: "1px solid #C1FD35",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        height: { base: "50px", sm: "64px" },
        textAlign: "center",
        w: "100%",
        _active: {
          background: "#C1FD35",
        },
        _hover: {
          background: "#c1fd35e4",
        },
      },
      secondary: {
        background: "#CECECE",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        height: { base: "50px", sm: "64px" },
        textAlign: "center",
        w: "100%",
        _active: {
          background: "#CECECE",
        },
        _hover: {
          background: "#cececee6",
        },
      },
    };
  }, []);

  return (
    <Button {...stylesByVariant[variant]} {...rest}>
      {label}
    </Button>
  );
};
