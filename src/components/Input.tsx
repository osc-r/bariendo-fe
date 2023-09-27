import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputProps,
} from "@chakra-ui/react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputComponentPropsType = {
  addonText?: string;
  inputProps?: InputProps;
  register?: UseFormRegisterReturn;
  errors?: FieldError;
};

const InputComponent = (props: InputComponentPropsType) => {
  const { addonText, inputProps, register, errors } = props;
  return (
    <FormControl isInvalid={Boolean(errors)}>
      <FormLabel
        display={{ base: "block", sm: "none" }}
        fontSize={{ base: "sm" }}
      >
        {addonText}
      </FormLabel>
      <InputGroup size={{ base: "sm", md: "md" }}>
        <InputLeftAddon
          borderTopRightRadius={"0 !important"}
          borderBottomRightRadius={"0 !important"}
          display={{ base: "none", sm: "block" }}
          pt={{ sm: 1, md: 1.5 }}
        >
          {addonText}
        </InputLeftAddon>
        <Input
          {...register}
          {...inputProps}
          sx={{
            borderTopLeftRadius: "0 !important",
            borderBottomLeftRadius: "0 !important",
            ...inputProps?.sx,
          }}
        />
      </InputGroup>
      <FormErrorMessage>{errors?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default InputComponent;
