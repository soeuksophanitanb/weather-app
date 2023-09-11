import "./Wrapper.css";
const Wrapper = ({ children }) => {
  return (
    <section className="w-full flex flex-col gap-6 h-full bg-wrapper rounded-md p-[1rem]">
      {children}
    </section>
  );
};

export default Wrapper;
