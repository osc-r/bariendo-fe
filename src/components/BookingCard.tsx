"use client";
import { Box, Card, CardBody, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BookingResponse } from "@/types/service";

type BookingCardType = BookingResponse;

const BookingCard = (props: BookingCardType) => {
  return (
    <Card
      m={4}
      mt={0}
      bg="#EEF1F5"
      boxShadow={"none"}
      sx={{ cursor: "pointer" }}
    >
      <CardBody>
        <Flex>
          <Box flex={1}>
            <Text
              fontWeight={"bold"}
              color="gray.600"
              fontSize={{ base: "xs", sm: "sm", md: "md" }}
            >
              {props.title}
            </Text>
            <Text color={"gray.400"} fontSize={{ base: "xx-small", sm: "xs" }}>
              {props.detail}
            </Text>
          </Box>
          <Text
            fontWeight={"bold"}
            color="gray.600"
            fontSize={{ base: "xs", sm: "sm", md: "md" }}
          >
            {Intl.DateTimeFormat(undefined, {
              hour: "2-digit",
              minute: "2-digit",
            }).format(new Date(props.bookingDateTime))}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default BookingCard;
