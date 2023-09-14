import Button from "../Button/Button";
import "./SearchBox.css";
import DropDown from "../DropDown/DropDown";
import useMyStore from "../../store/store";
import { useRef } from "react";

const SearchBox = () => {
  const { setFiltered, setCurrentLocation } = useMyStore();
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setFiltered(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    inputRef.current.value = "";
  };

  const getMyLocation = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation(latitude, longitude);
    });
  };

  return (
    <form className="form relative max-[460px]:grid-cols-1">
      <input
        ref={inputRef}
        onChange={handleSubmit}
        className="border normal-title text--black rounded-md py-2 px-4"
        type="text"
        placeholder="search city...."
      />
      <Button title="My Location" onClick={getMyLocation} />
      <DropDown />
    </form>
  );
};

export default SearchBox;
