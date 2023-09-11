import { useEffect, useState } from "react";
import Weather from "./components/Weather/Weather";
import axios from "axios";
import useMyStore from "./store/store";

const App = () => {
  const { api_key, setData, data } = useMyStore();
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation({ latitude, longitude });
    });
  }, []);

  useEffect(() => {
    if (currentLocation) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&units=metric&appid=${api_key}`
        )
        .then((res) => {
          console.log(res.data);
          setData(res.data);
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
