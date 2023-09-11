import { getDateDetails } from "../../store/data";
import useMyStore from "../../store/store";
import Details from "../Details/Details";

const InfoToday = () => {
  const { data } = useMyStore();
  const timestamp = data?.dt;
  const { day } = getDateDetails(timestamp);

  return (
    <section className="info-today ">
      <div className="normal-title rounded-lg text--black py-2 px-4 flex justify-between items-center bg--gray">
        <div className="flex items-center gap-3">
          <img className="w-[5rem] h-[5rem]" src="./svgs/sunrise.svg" alt="" />
          <p className="normal-title text--balck !font-bold">{day}</p>
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
