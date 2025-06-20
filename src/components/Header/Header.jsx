import { useState } from "react";
import PropTypes from "prop-types";
import ThemeToggle from "../ThemeProvider/ThemeToggle";
import Logo from "../Logo/Logo";
import {
  HeaderContainer,
  Navigation,
  StyledNavLink,
  BurgerMenuIcon,
  LanguageSwitcher,
  FlagIcon,
} from "./Header.styled";
import { useTranslation } from "react-i18next";

const Header = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <HeaderContainer>
      <Logo />
      <BurgerMenuIcon onClick={toggleMenu}>☰</BurgerMenuIcon>
      <Navigation $isOpen={isOpen}>
        <StyledNavLink to="/" end onClick={toggleMenu}>
          {t("home")}
        </StyledNavLink>
        <StyledNavLink to="/about" onClick={toggleMenu}>
          {t("aboutMe")}
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

      <LanguageSwitcher>
        <button onClick={() => changeLanguage("en")}>
          EN
          <FlagIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 480"
              width="20"
              height="20"
            >
              <rect width="640" height="480" fill="#fff" />
              <path fill="#012169" d="M0 0h640v480H0z" />
              <path stroke="#fff" strokeWidth="40" d="M320 0v480M0 240h640" />
              <path
                stroke="#c8102e"
                strokeWidth="30"
                d="M320 0v480M0 240h640"
              />
            </svg>
          </FlagIcon>
        </button>

        <button onClick={() => changeLanguage("pl")}>
          PL
          <FlagIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 480"
              width="20"
              height="20"
            >
              <rect width="640" height="240" fill="#fff" />
              <rect y="240" width="640" height="240" fill="#dc143c" />
            </svg>
          </FlagIcon>
        </button>

        <button onClick={() => changeLanguage("uk")}>
          UA
          <FlagIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 480"
              width="20"
              height="20"
            >
              <rect width="640" height="240" fill="#0057b7" />
              <rect y="240" width="640" height="240" fill="#ffd700" />
            </svg>
          </FlagIcon>
        </button>
      </LanguageSwitcher>

      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </HeaderContainer>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
