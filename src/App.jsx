import { useEffect, useState } from "react";
import useMyStore from "./store/store";
import Weather from "./components/Weather/Weather";

const App = () => {
  const { data, fetchData, getUrl } = useMyStore();
  const [weathers, setWeather] = useState();
  useEffect(() => {
    fetchData(getUrl());
    console.log(data);
  }, []);

  return (
    <main>
      <Weather />
    </main>
  );
};

export default App;
