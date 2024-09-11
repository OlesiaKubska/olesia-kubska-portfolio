import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { FooterContainer, ContactInfo, SocialLink } from "./Footer.styled";

const Footer = () => {
 const { t } = useTranslation();

 return (
  <FooterContainer>
   <ContactInfo>
    <p>{t("contact")}</p>
    <div>(+48) 795375541</div>
    <div>kublesia0908@gmail.com</div>
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
    <div>Bialystok, Poland</div>
   </ContactInfo>
  </FooterContainer>
 );
};

export default Footer;
