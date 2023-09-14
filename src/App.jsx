import { useEffect, useState } from "react";
import Weather from "./components/Weather/Weather";
import axios from "axios";
import useMyStore from "./store/store";
import city_data from "./json_data/city_data.json";

const App = () => {
  const {
    api_key,
    setData,
    currentLocation,
    setCurrentLocation,
    setFiveDays,
    data_5_days,
    setCountryName,
  } = useMyStore();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation(latitude, longitude);
      });
    }
  }, []);

  useEffect(() => {
    if (currentLocation) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&units=metric&appid=${api_key}`
        )
        .then((res) => {
          const c_name = city_data.find((c) =>
            c.name === res.data.name ? c.country_name : ""
          );
          setCountryName(c_name.country_name);
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [currentLocation]);

  useEffect(() => {
    if (currentLocation) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&units=metric&appid=${api_key}`
        )
        .then((res) => {
          setFiveDays(res.data.list);
        })
        .catch((err) => console.log(err));
    }
  }, [currentLocation]);

  return (
    <main>
      <Weather />
    </main>
  );
};

export default App;
