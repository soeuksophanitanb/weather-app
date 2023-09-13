import useMyStore from "../../store/store";

const SmallTitle = () => {
  const { data } = useMyStore();

  return (
    <p className="small-title border flex flex-col justify-center gap-3 py-3 px-4 rounded-md text--black items-center">
      <span>City : {data.name}</span>
      <span>Country : {data?.sys?.country}</span>
    </p>
  );
};

export default SmallTitle;
