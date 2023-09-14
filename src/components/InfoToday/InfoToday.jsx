import { getDateDetails, getWeather, today } from "../../store/data";
import useMyStore from "../../store/store";
import Details from "../Details/Details";
import "./InfoToday.css";

const InfoToday = () => {
  const currentDay = new Date();
  const { data } = useMyStore();
  const timestamp = data?.dt;
  // const { day, year } = getDateDetails(timestamp);
  let icon =
    data && data.weather && data.weather[0] && getWeather(data.weather[0].icon);
  return (
    <section className="info-today">
      <div className="info normal-title text--black bg--gray max-[450px]:flex-col">
        <div className="flex items-center gap-6">
          <img className="w-[5rem] h-[5rem]" src={icon} alt="" />
          <p className="normal-title text--balck !font-bold flex gap-4">
            <span>{today(currentDay.getDay())}</span>
            <span>{currentDay.getDate()}</span>
            <span>{currentDay.getFullYear()}</span>
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
