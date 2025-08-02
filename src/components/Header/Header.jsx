import { useState } from "react";
import PropTypes from "prop-types";
import ThemeToggle from "../ThemeProvider/ThemeToggle";
import Logo from "../Logo/Logo";
import {
  HeaderContainer,
  Navigation,
  StyledNavLink,
  BurgerMenuIcon,
  HeaderContent,
} from "./Header.styled";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Header = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        <BurgerMenuIcon onClick={toggleMenu}>☰</BurgerMenuIcon>
        <Navigation $isOpen={isOpen}>
          <StyledNavLink to="/" end onClick={toggleMenu}>
            {t("home")}
          </StyledNavLink>
          <StyledNavLink to="/about" onClick={toggleMenu}>
            {t("about")}
          </StyledNavLink>
          <StyledNavLink to="/projects" onClick={toggleMenu}>
            {t("projectsPage")}
          </StyledNavLink>
          <StyledNavLink to="/achievements" onClick={toggleMenu}>
            {t("achievements")}
          </StyledNavLink>
          <StyledNavLink to="/contact" onClick={toggleMenu}>
            {t("contact")}
          </StyledNavLink>
        </Navigation>
        <LanguageSelector direction="column" />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </HeaderContent>
    </HeaderContainer>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
