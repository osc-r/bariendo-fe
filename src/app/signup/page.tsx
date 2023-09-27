"use client";

import SignUpForm from "@/forms/SignUpForm";
import { SignUpFormType } from "@/types/forms";
import { Link } from "@chakra-ui/next-js";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

const RegisterPage = () => {
  const router = useRouter();

  const onSubmit: SubmitHandler<SignUpFormType> = (data) => {
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
        borderRadius={{ base: 0, sm: 8 }}
        overflow={"hidden"}
        boxShadow={"0px 10px 15px -3px rgba(0,0,0,0.2)"}
      >
        <Stack spacing={2} mt={4}>
          <Heading mb={8} color={"gray.700"}>
            Sign Up
          </Heading>
          <SignUpForm onSubmit={onSubmit} />
          <Text
            textAlign={"center"}
            fontSize={{ base: "xs", sm: "sm" }}
            color={"gray.500"}
            fontWeight={"bold"}
          >
            Have an account?
            <Link ml={2} href={"/"} color="red.500" fontWeight={"bold"}>
              Sign In
            </Link>
          </Text>
        </Stack>
      </Box>
    </Container>
  );
};

export default RegisterPage;
