"use client";

import RegisterForm from "@/forms/Register";
import { RegisterFormType } from "@/types/forms";
import { Link } from "@chakra-ui/next-js";
import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

const RegisterPage = () => {
  const router = useRouter();
  const onSubmitRegister: SubmitHandler<RegisterFormType> = (data) => {
    console.log(data);
    router.push("/");
  };

  return (
    <Container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      maxW={{ base: "container.sm", md: "container.md" }}
      p={{ base: 0, sm: "initial" }}
    >
      <Flex
        bg="gray.50"
        borderRadius={{ base: 0, sm: 8 }}
        overflow={"hidden"}
        sx={{
          boxShadow: { base: "none", sm: "0px 10px 15px -3px rgba(0,0,0,0.2)" },
        }}
        minH={640}
        minW="fit-content"
        flexDir={{ base: "column", md: "row" }}
      >
        <Box
          minW={300}
          minH={225}
          bg="green.200"
          flex={1}
          sx={{
            backgroundImage: "url(/assets/mock-up-1.jpeg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "90%",
          }}
        />
        <Box bg="gray.50" p={8} borderRadius={8}>
          <Stack spacing={2} mt={4}>
            <Text fontSize={"md"} color={"gray.500"}>
              Join us at
            </Text>
            <Heading mt={-2} mb={6} color={"gray.700"}>
              DocBook
            </Heading>
            <RegisterForm onSubmit={onSubmitRegister} />
            <Text textAlign={"center"} fontSize={"sm"}>
              Already have an account?
              <Link ml={2} href={"/"} color="blue.500">
                Login
              </Link>
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
};

export default RegisterPage;
