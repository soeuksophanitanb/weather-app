import useMyStore from "../../store/store";

const SmallTitle = () => {
  const { data } = useMyStore();

  return (
    <p className="small-title border py-3 px-4 rounded-md text--black text-center">
      {data.name}
    </p>
  );
};

export default SmallTitle;
