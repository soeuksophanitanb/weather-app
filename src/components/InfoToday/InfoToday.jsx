import { getDateDetails, getWeather } from "../../store/data";
import useMyStore from "../../store/store";
import Details from "../Details/Details";

const InfoToday = () => {
  const { data } = useMyStore();
  const timestamp = data?.dt;
  const { day, year } = getDateDetails(timestamp);
  let icon =
    data && data.weather && data.weather[0] && getWeather(data.weather[0].icon);
  return (
    <section className="info-today">
      <div className="normal-title rounded-lg text--black py-3 px-4 flex justify-between items-center bg--gray border">
        <div className="flex items-center gap-3">
          <img className="w-[5rem] h-[5rem]" src={icon} alt="" />
          <p className="normal-title text--balck !font-bold">
            Today <span>{day}</span> <span>{year}</span>
          </p>
        </div>
        <div>
          <p className="text--black normal-title !font-bold">
            {Math.round(data?.main?.temp)} °
          </p>
        </div>
      </div>
      <Details />
    </section>
  );
};

export default InfoToday;
