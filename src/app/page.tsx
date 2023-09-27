"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import LoginForm from "@/forms/Login";
import { SubmitHandler } from "react-hook-form";
import { LoginFormType } from "@/types/forms";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const onSubmitLogin: SubmitHandler<LoginFormType> = (data) => {
    console.log(data);
    router.push("/home");
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
        borderRadius={8}
        overflow={"hidden"}
        boxShadow={"0px 10px 15px -3px rgba(0,0,0,0.2)"}
      >
        <Stack spacing={2}>
          <Heading color={"gray.700"}>Sign in</Heading>
          <Text fontSize={"sm"} color={"gray.500"} mb={6}>
            Hi there! Nice to see you again.
          </Text>
          <LoginForm onSubmit={onSubmitLogin} />
          <Text
            textAlign={"center"}
            fontSize={{ base: "xs", sm: "sm" }}
            color={"gray.400"}
            fontWeight={"bold"}
          >
            Haven't an Account?
            <Link ml={2} href={"/register"} color="red.500" fontWeight={"bold"}>
              Sign Up
            </Link>
          </Text>
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginPage;
