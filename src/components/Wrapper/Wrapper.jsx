import "./Wrapper.css";
const Wrapper = ({ children }) => {
  return (
    <section className="w-full h-full bg-wrapper rounded-md p-[1rem]">
      {children}
    </section>
  );
};

export default Wrapper;
