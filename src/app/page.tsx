"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import SignInForm from "@/forms/SignInForm";
import { SubmitHandler } from "react-hook-form";
import { SignInFormType } from "@/types/forms";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const onSubmit: SubmitHandler<SignInFormType> = (data) => {
    console.log(data);
    router.push("/booking");
  };

  return (
    <Container
      display={"flex"}
      justifyContent={{ base: "initial", sm: "center" }}
      alignItems={{ base: "initial", sm: "center" }}
      maxW={{ base: "container.sm", md: "container.md" }}
      p={{ base: 0, sm: "initial" }}
    >
      <Box
        flex={{ base: 1, sm: "initial" }}
        p={8}
        bg="white"
        borderRadius={{ base: 0, sm: 8 }}
        overflow={"hidden"}
        boxShadow={"0px 10px 15px -3px rgba(0,0,0,0.2)"}
      >
        <Stack spacing={2}>
          <Heading color={"gray.700"}>Sign in</Heading>
          <Text fontSize={"sm"} color={"gray.500"} mb={6}>
            Hi there! Nice to see you again.
          </Text>
          <SignInForm onSubmit={onSubmit} />
          <Text
            textAlign={"center"}
            fontSize={{ base: "xs", sm: "sm" }}
            color={"gray.500"}
            fontWeight={"bold"}
          >
            Haven't an Account?
            <Link ml={2} href={"/signup"} color="red.500" fontWeight={"bold"}>
              Sign Up
            </Link>
          </Text>
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginPage;
