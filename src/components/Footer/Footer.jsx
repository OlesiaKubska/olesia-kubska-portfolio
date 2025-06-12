import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Logo from "../Logo/Logo";
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import {
  FooterContainer,
  ContactInfo,
  SocialLink,
  FooterNav,
  Copyright,
  LogoWrapper,
  FooterContent,
} from "./Footer.styled";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterContent>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <FooterNav>
          <NavLink to="/">
            <FaHome style={{ marginRight: "6px" }} />
            {t("home")}
          </NavLink>
          <NavLink to="/about">
            <FaUserAlt style={{ marginRight: "6px" }} />
            {t("aboutMe")}
          </NavLink>
          <NavLink to="/projects">
            <FaProjectDiagram style={{ marginRight: "6px" }} />
            {t("projects")}
          </NavLink>
          <NavLink to="/contact">
            <FaEnvelopeOpenText style={{ marginRight: "6px" }} />
            {t("contact")}
          </NavLink>
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
      </FooterContent>
      <Copyright>
        &copy; {new Date().getFullYear()}{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>
        Olesia Kubska
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
