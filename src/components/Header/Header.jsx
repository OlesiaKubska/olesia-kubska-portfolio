import { useState } from "react";
import PropTypes from "prop-types";
import ThemeToggle from "../ThemeProvider/ThemeToggle";
import Logo from "../Logo/Logo";
import {
 HeaderContainer,
 Navigation,
 StyledNavLink,
 BurgerMenuIcon,
} from "./Header.styled";

const Header = ({ theme, toggleTheme }) => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleMenu = () => setIsOpen(!isOpen);

 return (
  <HeaderContainer>
   <Logo />
   <BurgerMenuIcon onClick={toggleMenu}>☰</BurgerMenuIcon>
   <Navigation $isOpen={isOpen}>
    <StyledNavLink to="/" end onClick={toggleMenu}>
     Home
    </StyledNavLink>
    <StyledNavLink to="/about" onClick={toggleMenu}>
     About
    </StyledNavLink>
    <StyledNavLink to="/projects" onClick={toggleMenu}>
     Projects
    </StyledNavLink>
    <StyledNavLink to="/contact" onClick={toggleMenu}>
     Contact
    </StyledNavLink>
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
