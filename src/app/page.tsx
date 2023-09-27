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
      justifyContent={"center"}
      alignItems={"center"}
      maxW={{ base: "container.sm", md: "container.md" }}
    >
      <Box bg="gray.50" p={8} borderRadius={8}>
        <Stack spacing={2}>
          <Text fontSize={"sm"} color={"gray.500"}>
            Welcome to
          </Text>
          <Heading mt={-2} mb={6} color={"gray.700"}>
            DocBook
          </Heading>
          <LoginForm onSubmit={onSubmitLogin} />
          <Text textAlign={"center"} fontSize={"sm"}>
            Don't have account?
            <Link ml={2} href={"/register"} color="blue.500">
              Register
            </Link>
          </Text>
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginPage;
