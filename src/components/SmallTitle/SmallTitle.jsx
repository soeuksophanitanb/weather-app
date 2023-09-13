import useMyStore from "../../store/store";

const SmallTitle = () => {
  const { data, country_name } = useMyStore();

  return (
    <p className="small-title border flex flex-col justify-center gap-3 py-3 px-4 rounded-md text--black items-center">
      <span>{data.name}</span>
      <span className="normal-title">{country_name}</span>
    </p>
  );
};

export default SmallTitle;
