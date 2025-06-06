import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { LogoStyled } from "./Logo.styled";

const Logo = () => {
 return (
  <div>
   <NavLink to="/">
    <LogoStyled src={logo} alt="logo" />
   </NavLink>
  </div>
 );
};

export default Logo;
