const ListDays = () => {
  return (
    <section className="list-day  bg--white border my-3 rounded-md">
      <ul className="list-items">
        <li className="item flex items-center justify-between py-4 px-4 normal-title text--black !font-bold border-b">
          <div className="flex gap-3 items-center">
            <img
              className="w-[5rem] h-[5rem]"
              src="./svgs/snowflake.svg"
              alt=""
            />
            <p>Friday</p>
          </div>
          <p>-2°</p>
        </li>
      </ul>
    </section>
  );
};

export default ListDays;
