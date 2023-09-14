import svg01d from "../../svgs/openweathermap/01d.svg";
import svg01n from "../../svgs/openweathermap/01n.svg";
import svg02d from "../../svgs/openweathermap/02d.svg";
import svg02n from "../../svgs/openweathermap/02n.svg";
import svg03d from "../../svgs/openweathermap/03d.svg";
import svg03n from "../../svgs/openweathermap/03n.svg";
import svg04d from "../../svgs/openweathermap/04d.svg";
import svg04n from "../../svgs/openweathermap/04n.svg";
import svg09d from "../../svgs/openweathermap/09d.svg";
import svg09n from "../../svgs/openweathermap/09n.svg";
import svg10d from "../../svgs/openweathermap/10d.svg";
import svg10n from "../../svgs/openweathermap/10n.svg";
import svg11d from "../../svgs/openweathermap/11d.svg";
import svg11n from "../../svgs/openweathermap/11n.svg";
import svg13d from "../../svgs/openweathermap/13d.svg";
import svg13n from "../../svgs/openweathermap/13n.svg";
import svg50d from "../../svgs/openweathermap/50d.svg";
import svg50n from "../../svgs/openweathermap/50n.svg";
import thermometercelsius from "../../svgs/thermometer-celsius.svg";
import humidity from "../../svgs/humidity.svg";
import wind from "../../svgs/wind.svg";
import pressure from "../../svgs/pressure-high.svg";

export const getDateDetails = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const today = date.getDay();
  return {
    year,
    month,
    day,
    hours,
    today,
  };
};

export const sign_icon = {
  thermometercelsius,
  humidity,
  wind,
  pressure,
};

export const icons = {
  "01d": svg01d,
  "01n": svg01n,
  "02d": svg02d,
  "02n": svg02n,
  "03d": svg03d,
  "03n": svg03n,
  "04d": svg04d,
  "04n": svg04n,
  "09d": svg09d,
  "09n": svg09n,
  "10d": svg10d,
  "10n": svg10n,
  "11d": svg11d,
  "11n": svg11n,
  "13d": svg13d,
  "13n": svg13n,
  "50d": svg50d,
  "50n": svg50n,
};

export const getWeather = (des) => {
  for (let key in icons) {
    if (des === key) {
      return icons[key];
    }
  }
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

  return today;
};
