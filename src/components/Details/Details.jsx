import useMyStore from "../../store/store";
import "./Details.css";
const Details = () => {
  const { data } = useMyStore();
  return (
    <div className="details bg--gray  normal-title text--black py-3 px-4">
      <div className="flex items-center justify-around gap-10 w-full">
        <div className="flex items-center gap-6">
          <p className="text--black font-bold flex items-center">
            <img className="w-[56px]" src="./svgs/celsius.svg" alt="celsius" />
            <span>Feels Like</span>
          </p>
          <p className="text--black">{Math.floor(data?.main?.feels_like)} °</p>
        </div>
        <div className="flex items-center justify-between gap-6">
          <p className="text--black font-bold flex items-center">
            <img className="w-[56px]" src="./svgs/wind.svg" alt="wind" />
            <span>Wind</span>
          </p>
          <p className="text--black">
            {Math.round(data?.wind?.speed * 3.6)} Km/h
          </p>
        </div>
      </div>
      <div className="flex items-center justify-around gap-10 w-full">
        <div className="flex items-center justify-between gap-6">
          <p className="text--black font-bold flex items-center">
            <img
              className="w-[56px]"
              src="./svgs/humidity.svg"
              alt="humidity"
            />
            <span>Humidity</span>
          </p>
          <p className="text--black">{data?.main?.humidity} %</p>
        </div>
        <div className="flex items-center justify-between gap-6">
          <p className="text--black font-bold flex items-center">
            <img
              className="w-[56px]"
              src="./svgs/pressure-high.svg"
              alt="pressure"
            />
            <span>Pressure</span>
          </p>
          <p className="text--black">{data?.main?.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
