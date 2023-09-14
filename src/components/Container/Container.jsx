import "./Container.css";

const Container = ({ children }) => {
  return (
    <section className="wrapper-container max-[700px]:w-[47rem] max-[470px]:w-[90%] mx-auto my-6">
      {children}
    </section>
  );
};

export default Container;
