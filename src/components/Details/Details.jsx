import "./Details.css";
const Details = () => {
  return (
    <div className="details ">
      <div className="flex items-center justify-center gap-10 w-full">
        <div className="flex items-center gap-3">
          <p>Precipitation</p>
          <p>70%</p>
        </div>
        <div className="flex items-center gap-3">
          <p>Wind</p>
          <p>8 km/h</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Details;
