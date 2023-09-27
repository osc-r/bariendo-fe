"use client";
import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  generateDateInMonthFromGivenDate,
  generateMonthsFromTodayUntilNext,
} from "../utilities/datetime";
import { FormProvider, useForm } from "react-hook-form";
import { DefaultFormProps } from "@/types/defaultFormProps";
import { BookingFormType } from "@/types/forms";

const BOOKING_MONTHS_IN_ADVANCED = 6;

const BookingForm: React.FC<DefaultFormProps<BookingFormType>> = (props) => {
  const methods = useForm<BookingFormType>();
  const {
    handleSubmit,
    formState: { errors },
    watch,
  } = methods;

  const [months, setMonths] = useState<{ label: string; value: string }[]>([]);

  const [dates, setDates] = useState<
    { value: string; day: string; date: number }[]
  >([]);

  useEffect(() => {
    const getMonths = () => {
      const list = generateMonthsFromTodayUntilNext(BOOKING_MONTHS_IN_ADVANCED);
      setMonths(list);
    };
    getMonths();
  }, []);

  const selectedMonth = watch("month");
  const selectedDate = watch("date");

  useEffect(() => {
    const genDates = () => {
      const list = generateDateInMonthFromGivenDate(selectedMonth);
      setDates(list);
      methods.setValue("date", list[0].value);
    };
    selectedMonth && genDates();
  }, [selectedMonth]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(props.onSubmit)}
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <Flex flexDir={"column"} flex={1}>
          <Stack spacing={6}>
            <FormControl isInvalid={Boolean(errors.type)}>
              <Select
                placeholder="Select option"
                w={"70%"}
                bg="gray.200"
                {...methods.register("type", {
                  required: "*Required",
                })}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>

              <FormErrorMessage>{errors?.type?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.month)}>
              <Select
                placeholder="Select option"
                w={"70%"}
                bg="gray.200"
                {...methods.register("month", {
                  required: "*Required",
                })}
              >
                {months.map((i) => (
                  <option value={i.value} key={i.label}>
                    {i.label}
                  </option>
                ))}
              </Select>

              <FormErrorMessage>{errors?.month?.message}</FormErrorMessage>
            </FormControl>

            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight={"bold"}
              mt={4}
            >
              Select Schedule
            </Text>
            <FormControl isInvalid={Boolean(errors.date)}>
              <RadioGroup>
                <Flex
                  p={3}
                  overflowX="auto"
                  overflowY={"hidden"}
                  css={{
                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                  }}
                >
                  {dates.map((i) => (
                    <label style={{ marginRight: 8 }} key={i.value}>
                      <Flex
                        flexDir={"column"}
                        bg="gray.100"
                        w={{ base: 14, sm: 16, md: 16 }}
                        h={{ base: 14, sm: 16, md: 16 }}
                        borderRadius={12}
                        justifyContent={"center"}
                        alignItems={"center"}
                        cursor={"pointer"}
                        borderColor={
                          selectedDate === i.value ? "red.500" : "transparent"
                        }
                        borderWidth={2}
                        transition={"all 0.2s ease-in-out"}
                      >
                        <Text
                          fontSize={{ base: "xs", sm: "sm", md: "sm" }}
                          fontWeight={"bold"}
                        >
                          {i.day}
                        </Text>
                        <Text
                          fontSize={{ base: "xs", sm: "sm", md: "sm" }}
                          fontWeight={"bold"}
                        >
                          {i.date}
                        </Text>
                      </Flex>
                      <Radio
                        value={i.value}
                        hidden
                        {...methods.register("date", {
                          required: "*Please select date",
                        })}
                      />
                    </label>
                  ))}
                </Flex>
              </RadioGroup>
              <FormErrorMessage mt={{ base: -6, md: -4 }}>
                {errors?.date?.message}
              </FormErrorMessage>
            </FormControl>
            <Divider borderTopWidth={2}></Divider>
            <FormControl isInvalid={Boolean(errors.date)}>
              <RadioGroup>
                <Flex
                  p={3}
                  overflowX="auto"
                  overflowY={"hidden"}
                  css={{
                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                  }}
                >
                  {dates.map((i) => (
                    <label style={{ marginRight: 8 }} key={i.value}>
                      <Flex
                        flexDir={"column"}
                        bg="gray.100"
                        w={{ base: 14, sm: 16, md: 16 }}
                        h={{ base: 14, sm: 16, md: 16 }}
                        borderRadius={12}
                        justifyContent={"center"}
                        alignItems={"center"}
                        cursor={"pointer"}
                        borderColor={
                          selectedDate === i.value ? "red.500" : "transparent"
                        }
                        borderWidth={2}
                        transition={"all 0.2s ease-in-out"}
                      >
                        <Text
                          fontSize={{ base: "xs", sm: "sm", md: "sm" }}
                          fontWeight={"bold"}
                        >
                          {i.day}
                        </Text>
                        <Text
                          fontSize={{ base: "xs", sm: "sm", md: "sm" }}
                          fontWeight={"bold"}
                        >
                          {i.date}
                        </Text>
                      </Flex>
                      <Radio
                        value={i.value}
                        hidden
                        {...methods.register("date", {
                          required: "*Please select date",
                        })}
                      />
                    </label>
                  ))}
                </Flex>
              </RadioGroup>
              <FormErrorMessage mt={{ base: -6, md: -4 }}>
                {errors?.date?.message}
              </FormErrorMessage>
            </FormControl>
            <Divider borderTopWidth={2}></Divider>
          </Stack>
        </Flex>
        <Flex
          justifyContent={"center"}
          pb={{ base: 3, md: 8 }}
          bg="white"
          mt={12}
        >
          <Button
            bg="red.500"
            colorScheme="red"
            color="white"
            w="100%"
            fontSize={{ base: "sm", md: "md" }}
            type="submit"
          >
            Book now
          </Button>
        </Flex>
      </form>
    </FormProvider>
  );
};

export default BookingForm;
