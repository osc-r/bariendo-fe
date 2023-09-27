import { Link } from "@chakra-ui/react";
import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import InputComponent from "@/components/Input";

const LoginPage = () => {
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
          <InputComponent addonText="Username" />
          <InputComponent
            addonText="Password"
            inputProps={{ type: "password" }}
          />
          <Button colorScheme="green" mt={6} size={{ base: "sm", md: "md" }}>
            Login
          </Button>
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
