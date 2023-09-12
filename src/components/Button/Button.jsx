import "./Button.css";
const Button = ({ title, onClick }) => {
  return (
    <button type="submit" onClick={onClick} className="btn normal-title">
      {title}
    </button>
  );
};

export default Button;
