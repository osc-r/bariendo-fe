import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
type InputComponentPropsType = {
  addonText?: string;
  inputProps?: InputProps;
  register?: UseFormRegisterReturn;
  errors?: FieldError;
};

const InputComponent = (props: InputComponentPropsType) => {
  const { addonText, inputProps, register, errors } = props;
  const [visible, setVisible] = useState(false);
  return (
    <FormControl isInvalid={Boolean(errors)}>
      <FormLabel
        fontSize={{ base: "sm" }}
        fontWeight={"bold"}
        color={"red.500"}
      >
        {addonText}
      </FormLabel>
      <InputGroup>
        <Input
          {...register}
          {...inputProps}
          type={visible ? "text" : inputProps?.type}
          variant={"flushed"}
        />
        {inputProps?.type === "password" && (
          <InputRightElement>
            <IconButton
              onClick={() => setVisible((o) => !o)}
              variant={"ghost"}
              size={"xs"}
              aria-label="toggle"
              icon={
                <AiFillEye size={22} color={visible ? "gray" : "lightgray"} />
              }
            ></IconButton>
          </InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage>{errors?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default InputComponent;
