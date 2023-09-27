import InputComponent from "@/components/Input";
import { DefaultFormProps } from "@/types/defaultFormProps";
import { RegisterFormType } from "@/types/forms";
import { Button, Stack } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";

const RegisterForm: React.FC<DefaultFormProps<RegisterFormType>> = (props) => {
  const methods = useForm<RegisterFormType>();
  const {
    handleSubmit,
    formState: { errors },
    getValues,
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
            register={methods.register("email", { required: "*Required" })}
            addonText="Email"
            errors={errors.email}
          />
          <InputComponent
            register={methods.register("password", {
              required: "*Required",
              minLength: { value: 8, message: "*Minimum length is 8" },
              deps: ["confirmPassword"],
            })}
            inputProps={{ type: "password" }}
            addonText="Password"
            errors={errors.password}
          />
          <InputComponent
            register={methods.register("confirmPassword", {
              required: "*Required",
              minLength: { value: 8, message: "*Minimum length is 8" },
              validate: (value) =>
                value === getValues("password") || "Password is not match",
            })}
            inputProps={{ type: "password" }}
            addonText="Confirm Password"
            errors={errors.confirmPassword}
          />
          <Button
            type="submit"
            colorScheme="green"
            mt={8}
            size={{ base: "sm", md: "md" }}
          >
            Register
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
