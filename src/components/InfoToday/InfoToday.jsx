const InfoToday = () => {
  return (
    <section className="info-today border rounded-lg">
      <div className="normal-title text--black py-2 px-4 flex justify-between items-center bg--gray">
        <div className="flex items-center gap-3">
          <img className="w-[5rem] h-[5rem]" src="./svgs/sunrise.svg" alt="" />
          <p className="normal-title text--balck !font-bold">Thursday</p>
        </div>
        <div>
          <p className="text--black normal-title !font-bold">-1°</p>
        </div>
      </div>
    </section>
  );
};

export default InfoToday;
