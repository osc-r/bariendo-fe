export const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const isSameDay = (day1: string, day2: string) => {
  const day1Instance = new Date(day1);
  const day2Instance = new Date(day2);
  return (
    `${day1Instance.getDate()}${day1Instance.getMonth()}${day1Instance.getFullYear()}` ===
    `${day2Instance.getDate()}${day2Instance.getMonth()}${day2Instance.getFullYear()}`
  );
};

export const getFullDateFormat = (date: string) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();

  const monthIndex = dateObj.getMonth();
  const year = dateObj.getFullYear();

  return `${day} ${monthNames[monthIndex]} ${year}`;
};

export const generateMonthsFromTodayUntilNext = (monthsNumber: number) => {
  const data = [];
  for (let i = 0; i <= monthsNumber; i++) {
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + i);
    endDate.getTime();
    data.push({
      label: `${monthNames[endDate.getMonth()]} ${endDate.getFullYear()}`,
      value: `${endDate.getFullYear()}/${
        endDate.getMonth() + 1
      }/${endDate.getDate()}`,
    });
  }
  return data;
};

export const generateDateInMonthFromGivenDate = (date: string) => {
  const dateList: any[] = [];

  const currentDateInstance = new Date(date);
  const totalDayInMonth = new Date(
    currentDateInstance.getFullYear(),
    currentDateInstance.getMonth() + 1,
    0
  ).getDate();

  const isCurrentMonth = isSameDay(new Date().toISOString(), date);

  const limit = isCurrentMonth
    ? totalDayInMonth - currentDateInstance.getDate() + 1
    : totalDayInMonth;

  const beforeCalDate = currentDateInstance.getDate();
  for (let i = 0; i < limit; i++) {
    currentDateInstance.setDate(isCurrentMonth ? beforeCalDate + i : 1 + i);
    dateList.push({
      value: `${currentDateInstance.getFullYear()}/${
        currentDateInstance.getMonth() + 1
      }/${currentDateInstance.getDate()}`,
      day: dayNames[currentDateInstance.getDay()],
      date: currentDateInstance.getDate(),
    });
  }
  return dateList;
};

export const  generateTimeslot = () => {
  const SLOT = 24;
  const list = [];
  const date = new Date();
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  for (let i = 0; i < SLOT; i++) {
    date.setHours(i);
    const [time, unit] = Intl.DateTimeFormat(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
      .format(date)
      .split(" ");

    list.push({
      value: date.toTimeString().split(" ")[0],
      label: `${time.slice(0, 5)} ${unit}`,
    });
  }
  return list;
};