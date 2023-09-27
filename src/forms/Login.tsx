"use client";
import InputComponent from "@/components/Input";
import { DefaultFormProps } from "@/types/defaultFormProps";
import { LoginFormType } from "@/types/forms";
import { Button, Stack } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";

const LoginForm: React.FC<DefaultFormProps<LoginFormType>> = (props) => {
  const methods = useForm<LoginFormType>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <Stack>
          <InputComponent
            register={methods.register("username", { required: "*Required" })}
            addonText="Username"
            errors={errors.username}
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
            colorScheme="green"
            mt={6}
            size={{ base: "sm", md: "md" }}
          >
            Login
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
