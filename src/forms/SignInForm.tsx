import InputComponent from "@/components/Input";
import { DefaultFormProps } from "@/types/defaultFormProps";
import { SignInFormType } from "@/types/forms";
import { Button, Stack } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";

const SignInForm: React.FC<DefaultFormProps<SignInFormType>> = (props) => {
  const methods = useForm<SignInFormType>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <Stack
          minW={{ base: "initial", sm: 300, md: 450 }}
          spacing={{ base: 6, md: 8 }}
        >
          <InputComponent
            register={methods.register("email", { required: "*Required" })}
            addonText="Email"
            errors={errors.email}
          />
          <InputComponent
            register={methods.register("password", {
              required: "*Required",
              minLength: { value: 8, message: "*Minimum length is 8" },
            })}
            inputProps={{ type: "password" }}
            addonText="Password"
            errors={errors.password}
          />
          <Button
            type="submit"
            bg="red.500"
            colorScheme="red"
            mt={6}
            mb={6}
            size={"md"}
          >
            Sign In
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default SignInForm;
