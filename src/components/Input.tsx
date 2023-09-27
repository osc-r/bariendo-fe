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
      <FormLabel fontSize={{ base: "sm" }} color={'red.500'}>{addonText}</FormLabel>
      <Input {...register} {...inputProps} variant={'flushed'} />
      <FormErrorMessage>{errors?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default InputComponent;
