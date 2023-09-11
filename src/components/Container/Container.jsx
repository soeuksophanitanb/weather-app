import "./Container.css";

const Container = ({ children }) => {
  return (
    <section className="wrapper-container mx-auto my-6">{children}</section>
  );
};

export default Container;
