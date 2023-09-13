import "./DropDown.css";
import city_data from "../../json_data/city_data.json";
import useMyStore from "../../store/store";

const DropDown = () => {
  const { filtered_city, setFiltered, setCurrentLocation } = useMyStore();
  const all_filtered =
    filtered_city?.length >= 3
      ? city_data.filter((city) =>
          city.name
            .toLowerCase()
            .slice(0, 8)
            .includes(filtered_city.slice(0, 8))
        )
      : [];
  console.log(all_filtered);

  // fn change location
  const changeLocation = (la, lon) => {
    setCurrentLocation(la, lon);
    setFiltered("");
    console.log(la, lon);
  };

  return (
    <section className={`drop-down ${filtered_city?.length >= 3 && "active"}`}>
      <section className="list-day  bg--white border  rounded-md">
        <ul className="list-items">
          {all_filtered?.map((city) => (
            <li
              onClick={() => changeLocation(city.coord.lat, city.coord.lon)}
              key={city.id}
              className="item normal-title text--black"
            >
              <div className="flex gap-3 items-center">
                <img
                  className="w-[5rem] h-[5rem]"
                  src="./svgs/snowflake.svg"
                  alt=""
                />
                <p>{city.name}</p>
              </div>
              <p>{city.country_name}</p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default DropDown;
