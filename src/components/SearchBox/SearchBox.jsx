import Button from "../Button/Button";
import "./SearchBox.css";
import DropDown from "../DropDown/DropDown";
import useMyStore from "../../store/store";
import { useRef } from "react";

const SearchBox = () => {
  const { setFiltered } = useMyStore();
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

  return (
    <form className="form relative" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        onChange={handleSubmit}
        className="border normal-title text--black rounded-md py-2 px-4"
        type="text"
        placeholder="search city...."
      />
      <Button title="Seach" onClick={() => {}} />
      <DropDown />
    </form>
  );
};

export default SearchBox;
