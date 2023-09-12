import "./Wrapper.css";
const Wrapper = ({ children }) => {
  return (
    <section className="w-full flex flex-col gap-6 h-full bg-wrapper rounded-md p-6">
      {children}
    </section>
  );
};

export default Wrapper;
