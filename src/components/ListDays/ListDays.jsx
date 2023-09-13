import useMyStore from "../../store/store";
import { getDateDetails, getWeather, today } from "../../store/data";

const ListDays = () => {
  const { data_5_days } = useMyStore();
  const fiveDays = [];
  for (let i = 8; i < data_5_days?.length; i += 8) {
    fiveDays.push(data_5_days[i]);
  }

  return (
    <section className="list-day  bg--white  rounded-md">
      <ul className="list-items grid grid-cols-2 gap-6">
        {fiveDays?.map((data, index) => (
          <li key={data.dt} className="item text--black normal-title">
            <div className="flex gap-3 items-center">
              <img
                className="w-[5rem] h-[5rem]"
                src={getWeather(data.weather[0].icon)}
                alt=""
              />
              <p>
                <span></span>
                {data && getDateDetails(data.dt).day}
              </p>
            </div>
            <p>{Math.floor(data.main.temp)} °</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListDays;
