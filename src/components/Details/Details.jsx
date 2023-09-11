import useMyStore from "../../store/store";
import "./Details.css";
const Details = () => {
  const { data } = useMyStore();
  return (
    <div className="details bg--gray  normal-title text--black">
      <div className="flex items-center justify-around gap-10 w-full">
        <div className="flex items-center gap-6">
          <p className="text--black font-bold">Precipitation</p>
          <p className="text--black">70%</p>
        </div>
        <div className="flex items-center justify-between gap-6">
          <p className="text--black font-bold">Wind</p>
          <p className="text--black">{Math.round(data?.wind?.speed)} km/h</p>
        </div>
      </div>
      <div className="flex items-center justify-around gap-10 w-full">
        <div className="flex items-center justify-between gap-6">
          <p className="text--black font-bold">Humidity</p>
          <p className="text--black">{data?.main?.humidity} %</p>
        </div>
        <div className="flex items-center justify-between gap-6">
          <p className="text--black font-bold">Pressure</p>
          <p className="text--black">{data?.main?.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
