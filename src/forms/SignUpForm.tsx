import InputComponent from "@/components/Input";
import { DefaultFormProps } from "@/types/defaultFormProps";
import { SignUpFormType } from "@/types/forms";
import { Link } from "@chakra-ui/next-js";
import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";

const SignUpForm: React.FC<DefaultFormProps<SignUpFormType>> = (props) => {
  const methods = useForm<SignUpFormType>();
  const {
    handleSubmit,
    formState: { errors },
    getValues,
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
            inputProps={{
              placeholder: "Your email address",
              _placeholder: { color: "gray.300" },
            }}
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

          <FormControl isInvalid={Boolean(errors.consent)}>
            <Checkbox
              colorScheme="red"
              {...methods.register("consent", {
                required: "*Required",
              })}
            >
              <Text fontSize={{ base: "xs", sm: "sm" }}>
                I agree to the{" "}
                <Link href="#" color="red.500" fontWeight={"bold"}>
                  Terms of Services
                </Link>{" "}
                and{" "}
                <Link href="#" color="red.500" fontWeight={"bold"}>
                  Privacy Policy.
                </Link>
              </Text>
            </Checkbox>
            <FormErrorMessage>{errors?.consent?.message}</FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            bg="red.500"
            colorScheme="red"
            mt={6}
            mb={6}
            size={"md"}
          >
            Continue
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
