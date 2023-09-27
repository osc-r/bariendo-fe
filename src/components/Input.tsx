import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputProps,
} from "@chakra-ui/react";

type InputComponentPropsType = {
  addonText: string;
  inputProps?: InputProps;
};

const InputComponent = (props: InputComponentPropsType) => {
  return (
    <FormControl>
      <FormLabel
        display={{ base: "block", sm: "none" }}
        fontSize={{ base: "sm" }}
      >
        {props.addonText}
      </FormLabel>
      <InputGroup size={{ base: "sm", md: "md" }}>
        <InputLeftAddon
          borderTopRightRadius={"0 !important"}
          borderBottomRightRadius={"0 !important"}
          display={{ base: "none", sm: "block" }}
          pt={{ sm: 1, md: 1.5 }}
        >
          {props.addonText}
        </InputLeftAddon>
        <Input
          {...props.inputProps}
          sx={{
            borderTopLeftRadius: "0 !important",
            borderBottomLeftRadius: "0 !important",
            ...props.inputProps?.sx,
          }}
        />
      </InputGroup>
      <FormErrorMessage></FormErrorMessage>
    </FormControl>
  );
};

export default InputComponent;
