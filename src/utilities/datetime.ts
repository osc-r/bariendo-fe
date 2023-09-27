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
  const monthNames = [
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
  const monthIndex = dateObj.getMonth();
  const year = dateObj.getFullYear();

  return `${day} ${monthNames[monthIndex]} ${year}`;
};
