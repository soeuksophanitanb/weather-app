import "./DropDown.css";
import city_data from "../../json_data/city_data.json";
import useMyStore from "../../store/store";

const DropDown = () => {
  const { filtered_city, cities } = useMyStore();

  return (
    <section className={`drop-down ${filtered_city && "active"}`}>
      <section className="list-day  bg--white border  rounded-md">
        <ul className="list-items">
          <li className="item flex items-center justify-between py-3 px-4 normal-title text--black !font-bold border-b">
            <div className="flex gap-3 items-center">
              <img
                className="w-[5rem] h-[5rem]"
                src="./svgs/snowflake.svg"
                alt=""
              />
              <p>Friday</p>
            </div>
            <p>-2°</p>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default DropDown;
