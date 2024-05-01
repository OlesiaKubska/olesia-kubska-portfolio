import PropTypes from "prop-types";
import ThemeToggle from "../ThemeProvider/ThemeToggle";
import Logo from "../Logo/Logo";
import { HeaderContainer, Navigation, StyledNavLink } from "./Header.styled";

const Header = ({ theme, toggleTheme }) => {
 return (
  <HeaderContainer>
   <Logo />
   <Navigation>
    <StyledNavLink to="/" end>
     Home
    </StyledNavLink>
    <StyledNavLink to="/about">About</StyledNavLink>
    <StyledNavLink to="/projects">Projects</StyledNavLink>
    <StyledNavLink to="/contact">Contact</StyledNavLink>
   </Navigation>
   <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
  </HeaderContainer>
 );
};

Header.propTypes = {
 theme: PropTypes.string.isRequired,
 toggleTheme: PropTypes.func.isRequired,
};

export default Header;
