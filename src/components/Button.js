import PropTypes from "prop-types";
const Button = ({ backgroundColor, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: backgroundColor }}
      className="btn"
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  backgroundColor: "steelBlue",
};
Button.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
