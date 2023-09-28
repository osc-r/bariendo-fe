"use client";
import {
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  Grid,
  GridItem,
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
  generateTimeslot,
} from "../utilities/datetime";
import { FormProvider, useForm } from "react-hook-form";
import { DefaultFormProps } from "@/types/defaultFormProps";
import { BookingFormType } from "@/types/forms";

const BOOKING_MONTHS_IN_ADVANCED = 6;

const BookingForm: React.FC<DefaultFormProps<BookingFormType>> = (props) => {
  const methods = useForm<BookingFormType>({ defaultValues: { time: [] } });
  const {
    handleSubmit,
    formState: { errors },
    watch,
  } = methods;

  const [months, setMonths] = useState<{ label: string; value: string }[]>([]);
  const [times, setTimes] = useState<{ label: string; value: string }[]>([]);

  const [dates, setDates] = useState<
    { value: string; day: string; date: number }[]
  >([]);

  useEffect(() => {
    const getMonths = () => {
      const list = generateMonthsFromTodayUntilNext(BOOKING_MONTHS_IN_ADVANCED);
      setMonths(list);
    };

    const genTimes = () => {
      const list = generateTimeslot();
      setTimes(list);
    };

    getMonths();
    genTimes();
  }, []);

  const selectedMonth = watch("month");
  const selectedDate = watch("date");
  const selectedTimes = watch("time");

  useEffect(() => {
    const genDates = () => {
      const list = generateDateInMonthFromGivenDate(selectedMonth);
      setDates(list);
      methods.setValue("date", "");
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

            {selectedMonth && (
              <React.Fragment>
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
                            bg="gray.50"
                            w={{ base: 14, sm: 16, md: 16 }}
                            h={{ base: 14, sm: 16, md: 16 }}
                            borderRadius={12}
                            justifyContent={"center"}
                            alignItems={"center"}
                            cursor={"pointer"}
                            borderColor={
                              selectedDate === i.value
                                ? "red.500"
                                : "transparent"
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
                  {errors?.date?.message && (
                    <FormErrorMessage mt={{ base: -6, md: -4 }}>
                      {errors?.date?.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <Divider borderTopWidth={2} mt={-4} mb={2}></Divider>
                <FormControl isInvalid={Boolean(errors.time)}>
                  <Grid
                    templateColumns={"repeat(12, 1fr)"}
                    columnGap={{ base: 1.5, sm: 4 }}
                  >
                    {times.map((i) => (
                      <GridItem
                        key={i.value}
                        colSpan={{ base: 4, md: 3 }}
                        mb={{ base: 1.5, sm: 4 }}
                      >
                        <label>
                          <Flex
                            flexDir={"column"}
                            bg="white"
                            p={{ base: 1.5, sm: 2 }}
                            borderRadius={{ base: 8, sm: 12 }}
                            justifyContent={"center"}
                            alignItems={"center"}
                            cursor={"pointer"}
                            borderColor={
                              selectedTimes.includes(i.value)
                                ? "red.500"
                                : "gray.100"
                            }
                            borderWidth={2}
                            transition={"all 0.2s ease-in-out"}
                          >
                            <Text
                              fontSize={{ base: "x-small", sm: "sm" }}
                              fontWeight={"bold"}
                            >
                              {i.label}
                            </Text>
                          </Flex>
                          <Checkbox
                            value={i.value}
                            hidden
                            {...methods.register("time", {
                              required: "*Please select timeslot",
                            })}
                          />
                        </label>
                      </GridItem>
                    ))}
                  </Grid>
                  {errors?.time?.message && (
                    <FormErrorMessage mt={{ base: -6, md: -4 }}>
                      {errors?.time?.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <Divider borderTopWidth={2}></Divider>
              </React.Fragment>
            )}
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
