"use client";
import {
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { TbLogout } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { BookingResponse } from "@/types/service";
import { getFullDateFormat, isSameDay } from "../../utilities/datetime";
import dynamic from "next/dynamic";

const BookingCard = dynamic(() => import("@/components/BookingCard"), {
  ssr: false,
});

const MOCK: BookingResponse[] = [
  {
    title: "Dr. Halima Sheppard",
    detail: "Cardiologist",
    bookingDateTime: new Date(2023, 8, 27, 9, 0).toLocaleString(),
  },
  {
    title: "Dr. Kenneth Walters",
    detail: "Orthodontist",
    bookingDateTime: new Date(2023, 8, 27, 11, 30).toLocaleString(),
  },
  {
    title: "Dr. Jennifer Stone",
    detail: "Eye Specialist",
    bookingDateTime: new Date(2023, 7, 17, 14, 30).toLocaleString(),
  },
];

const HomePage = () => {
  const router = useRouter();

  const [list, setList] = useState<BookingResponse[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setList(MOCK);
    }, 2500);
  }, []);

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
        overflow={"hidden"}
        flexDir={"column"}
        boxShadow={"0px 10px 15px -3px rgba(0,0,0,0.2)"}
      >
        <Flex
          pos="relative"
          justifyContent={"center"}
          alignItems={"center"}
          p={10}
          pt={{ base: 6, md: 10 }}
        >
          <Heading
            fontSize={{ base: "md", md: "2xl" }}
            color={"gray.700"}
            textAlign={"center"}
          >
            Booked Appointments
          </Heading>
          <IconButton
            variant={"ghost"}
            size={{ base: "xs", md: "sm" }}
            aria-label="logout"
            icon={<TbLogout size={16} color="red" />}
            pos={"absolute"}
            right={4}
          />
        </Flex>
        <Flex
          pos="relative"
          flex={1}
          flexDir={"column"}
          p={0}
          overflow={"auto"}
        >
          <Stack spacing={0}>
            {list.map((i, index) => {
              const firstDateIndicator = isSameDay(
                new Date().toISOString(),
                i.bookingDateTime
              )
                ? "Today"
                : getFullDateFormat(i.bookingDateTime);
              return (
                <React.Fragment key={index}>
                  {index === 0 && (
                    <Text
                      bg="#EFF0F3"
                      mb={4}
                      textAlign={"center"}
                      fontSize={"sm"}
                      fontWeight={"bold"}
                      p={1}
                    >
                      {firstDateIndicator}
                    </Text>
                  )}
                  {index > 0 &&
                    (isSameDay(
                      MOCK[index - 1].bookingDateTime,
                      i.bookingDateTime
                    ) ? null : (
                      <Text
                        bg="#EFF0F3"
                        mb={4}
                        textAlign={"center"}
                        fontSize={"sm"}
                        fontWeight={"bold"}
                        p={1}
                      >
                        {getFullDateFormat(i.bookingDateTime)}
                      </Text>
                    ))}
                  <BookingCard {...i} />
                </React.Fragment>
              );
            })}
          </Stack>
        </Flex>
        <Flex
          justifyContent={"center"}
          p={10}
          pb={{ base: 6, md: 12 }}
          bg="white"
        >
          <Button
            bg="red.500"
            colorScheme="red"
            color="white"
            w="100%"
            fontSize={{ base: "sm", md: "md" }}
            leftIcon={<IoMdAdd size={18} />}
          >
            Booking Appointment
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default HomePage;
