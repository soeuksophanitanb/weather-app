import useMyStore from "../../store/store";
import { icons, sign_icon } from "../../store/data";
import "./Details.css";
const Details = () => {
  const { data } = useMyStore();

  return (
    <div className="details bg--gray  normal-title text--black py-3 px-4">
      <div className="flex items-center justify-around gap-10 w-full max-[550px]:flex-col max-[550px]:gap-4">
        <div className="flex items-center gap-6">
          <p className="text--black font-bold flex items-center">
            <img
              className="w-[56px]"
              src={sign_icon.thermometercelsius}
              alt="celsius"
            />
            <span>Feels Like</span>
          </p>
          <p className="text--black">{Math.floor(data?.main?.feels_like)} °</p>
        </div>
        <div className="flex items-center justify-between gap-6">
          <p className="text--black font-bold flex items-center">
            <img className="w-[56px]" src={sign_icon.wind} alt="wind" />
            <span>Wind</span>
          </p>
          <p className="text--black">
            {Math.round(data?.wind?.speed * 3.6)} Km/h
          </p>
        </div>
      </div>
      <div className="flex items-center justify-around gap-10 w-full max-[550px]:flex-col max-[550px]:gap-4">
        <div className="flex items-center justify-between gap-6">
          <p className="text--black font-bold flex items-center">
            <img className="w-[56px]" src={sign_icon.humidity} alt="humidity" />
            <span>Humidity</span>
          </p>
          <p className="text--black">{data?.main?.humidity} %</p>
        </div>
        <div className="flex items-center justify-between gap-6">
          <p className="text--black font-bold flex items-center">
            <img className="w-[56px]" src={sign_icon.pressure} alt="pressure" />
            <span>Pressure</span>
          </p>
          <p className="text--black">{data?.main?.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
