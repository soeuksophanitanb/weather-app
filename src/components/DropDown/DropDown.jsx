import "./DropDown.css";
import city_data from "../../json_data/city_data.json";
import useMyStore from "../../store/store";

const DropDown = () => {
  const {
    filtered_city,
    setFiltered,
    setCurrentLocation,
    data,
    setCountryName,
  } = useMyStore();
  const all_filtered =
    filtered_city?.length >= 3
      ? city_data.filter((city) =>
          city.name.toLowerCase().trim().includes(filtered_city.trim())
        )
      : [];

  // fn change location
  const changeLocation = (la, lon, country_name) => {
    setCurrentLocation(la, lon);
    setFiltered("");
    setCountryName(country_name);
  };

  return (
    <section className={`drop-down ${filtered_city?.length >= 3 && "active"}`}>
      <section className="list-day border  bg--white rounded-md">
        <ul className="list-items">
          {all_filtered?.map((city) => (
            <li
              onClick={() =>
                changeLocation(
                  city.coord.lat,
                  city.coord.lon,
                  city.country_name
                )
              }
              key={city.id}
              className="item normal-title text--black"
            >
              <div className="flex gap-3 items-center">
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
