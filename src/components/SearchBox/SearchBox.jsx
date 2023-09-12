import Button from "../Button/Button";
import "./SearchBox.css";
import DropDown from "../DropDown/DropDown";
import useMyStore from "../../store/store";

const SearchBox = () => {
  const { setFiltered } = useMyStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setFiltered(e.target.value);
  };
  return (
    <form className="form relative" onSubmit={(e) => e.preventDefault()}>
      <input
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
