import React from "react";
import { FormControl, FormHelperText, FormLabel, InputProps, useColorMode } from "@chakra-ui/react";
import { Control, Controller, FieldError } from "react-hook-form";
import FieldInput from "../FieldInput/index";
import ReactInputMask, { Props } from "react-input-mask";

type FieldInputRegisterProps = {
  name: string;
  label?: string;
  error?: FieldError;
  helperText?: string | React.ReactNode;
  inputProps?: InputProps;
  control: Control<any>;
  defaultValue?: any;
} & InputProps &
  Props;

export const FieldInputMaskController: React.FC<FieldInputRegisterProps> = ({
  name,
  label,
  error,
  helperText,
  defaultValue,
  control,
  ...inputProps
}) => {
  const { colorMode } = useColorMode();

  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel
          fontStyle="normal"
          fontWeight="600"
          fontSize="16px"
          lineHeight="20px"
          textAlign="left"
          letterSpacing="0.04em"
          color={colorMode === "dark" ? "#fff" : "#000"}
          htmlFor={name}
        >
          {label}
        </FormLabel>
      )}

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => <FieldInput as={ReactInputMask} border={error && "1px solid #EE3838"} id={name} {...inputProps} {...field} />}
      />

      {helperText && !error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
