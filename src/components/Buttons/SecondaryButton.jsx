import PropTypes from "prop-types";
import { StyledButtonSecondary } from "./Button.styled.jsx";

const SecondaryButton = ({ children, onClick }) => {
  return (
    <StyledButtonSecondary onClick={onClick}>{children}</StyledButtonSecondary>
  );
};

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default SecondaryButton;
