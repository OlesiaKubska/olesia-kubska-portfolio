import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Logo from "../Logo/Logo";
import {
  FooterContainer,
  ContactInfo,
  SocialLink,
  FooterNav,
  Copyright,
} from "./Footer.styled";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <Logo />
      <FooterNav>
        <NavLink to="/">{t("home")}</NavLink>
        <NavLink to="/about">{t("aboutMe")}</NavLink>
        <NavLink to="/projects">{t("projects")}</NavLink>
        <NavLink to="/contact">{t("contact")}</NavLink>
      </FooterNav>
      <ContactInfo>
        <SocialLink
          href="https://github.com/OlesiaKubska"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size="1.5em" />
        </SocialLink>
        <SocialLink
          href="https://linkedin.com/in/olesia-kubska"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size="1.5em" />
        </SocialLink>
      </ContactInfo>
      <Copyright>&copy; {new Date().getFullYear()} Olesia Kubska.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
