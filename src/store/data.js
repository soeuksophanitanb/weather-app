export const getDateDetails = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  return {
    year,
    month,
    day,
    hours,
  };
};

export const getWeather = (des) => {
  return `./svgs/openweathermap/${des}.svg`;
};

export const today = (d) => {
  let today = "";
  if (d == 0) today = "Sunday";
  if (d == 1) today = "Monday";
  if (d == 2) today = "Tuesday";
  if (d == 3) today = "Wednesday";
  if (d == 4) today = "Thursday";
  if (d == 5) today = "Friday";
  if (d == 6) today = "Saturday";
  if (d === 7 || d > 7) {
    return "Sunday";
  }

  return today;
};
