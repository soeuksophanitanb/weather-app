import useMyStore from "../../store/store";

const Header = () => {
  const { big_title, data } = useMyStore();

  return (
    <header className="big-title text--black border py-3 px-4 rounded-md">
      <p>{big_title}</p>
    </header>
  );
};

export default Header;
