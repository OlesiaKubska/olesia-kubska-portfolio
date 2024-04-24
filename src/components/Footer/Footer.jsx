import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FooterContainer, ContactInfo, SocialLink } from "./Footer.styled";

const Footer = () => {
 return (
  <FooterContainer>
   <ContactInfo>
    <div>(+48) 795375541</div>
    <div>kublesia0908@gmail.com</div>
    <SocialLink
     href="https://github.com/yourusername"
     target="_blank"
     rel="noopener noreferrer"
    >
     <FaGithub size="1.5em" />
    </SocialLink>
    <SocialLink
     href="https://linkedin.com/in/yourusername"
     target="_blank"
     rel="noopener noreferrer"
    >
     <FaLinkedin size="1.5em" />
    </SocialLink>
    <div>Bialystok, Poland</div>
   </ContactInfo>
   {/* Тут може бути копірайт або інша інформація */}
  </FooterContainer>
 );
};

export default Footer;
