import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled.jsx";

const PrimaryButton = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default PrimaryButton;
