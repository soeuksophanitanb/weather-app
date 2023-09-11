import useMyStore from "../../store/store";

const SmallTitle = () => {
  const { data } = useMyStore();

  return <p className="small-title text--black text-center">{data.name}</p>;
};

export default SmallTitle;
