"use client";
import { Box, Container, Flex, IconButton, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import React from "react";
import BookingForm from "@/forms/BookingForm";
import { SubmitHandler } from "react-hook-form";
import { BookingFormType } from "@/types/forms";

const CreateBookingPage = () => {
  const router = useRouter();

  const onSubmit: SubmitHandler<BookingFormType> = (data) => {
    console.log(data);
    router.push("/booking");
  };

  return (
    <Container
      display={"flex"}
      maxW={{ base: "container.sm" }}
      p={{ base: 0, md: 8 }}
      overflow={"hidden"}
    >
      <Flex
        bg="white"
        flex={1}
        borderRadius={8}
        overflow={"auto"}
        flexDir={"column"}
        boxShadow={"0px 10px 15px -3px rgba(0,0,0,0.2)"}
        p={{ base: 0, sm: 4, md: 8 }}
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box>
          <IconButton
            onClick={() => router.replace("/booking")}
            variant={"ghost"}
            size={{ base: "xs", md: "sm" }}
            aria-label="logout"
            icon={<BiArrowBack size={22} color="red" />}
            mt={{ base: 4, sm: 0 }}
          />
        </Box>

        <Flex pos="relative" flex={1} flexDir={"column"} p={4}>
          <Text fontSize={{ base: "xl", md: "2xl" }} color={"gray.700"} mb={8}>
            Booking Appointments
          </Text>
          <BookingForm onSubmit={onSubmit} />
        </Flex>
      </Flex>
    </Container>
  );
};

export default CreateBookingPage;
