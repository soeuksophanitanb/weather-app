import useMyStore from "../../store/store";

const Header = () => {
  const { big_title } = useMyStore();
  return <header className="big-title text--black">{big_title}</header>;
};

export default Header;
