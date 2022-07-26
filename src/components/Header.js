import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button backgroundColor="green" text="Hello" onClick={onClick}></Button>
    </header>
  );
};

// const headingStyle = {
//   color: "black",
//   backgroundColor: "grey",
// };

Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
