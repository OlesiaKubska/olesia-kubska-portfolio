import PropTypes from "prop-types";
import { ToastWrapper } from "./CustomToast.styled";

const CustomToast = ({ message, success }) => {
  return <ToastWrapper $success={success}>{message}</ToastWrapper>;
};

CustomToast.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
};

export default CustomToast;
