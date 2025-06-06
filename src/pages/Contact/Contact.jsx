import { Formik, Field } from "formik";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import {
  ContactContainer,
  ContactForm,
  SocialLinks,
  LeftSide,
  RightSide,
  ProfileImage,
  ContactDetails,
} from "./Contact.styled";
import contactImage from "../../assets/images/contact/resume.jpg";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <ContactContainer
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
    >
      <LeftSide>
        <h3>{t("connect")}</h3>
        <SocialLinks>
          <a
            href="https://github.com/olesiakubska"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size="1.5em" />
          </a>
          <a
            href="https://linkedin.com/in/olesia-kubska"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size="1.5em" />
          </a>
        </SocialLinks>
        <ContactDetails>
          <a href="mailto:kublesia0908@gmail.com" aria-label="Send email">
            kublesia0908@gmail.com
          </a>
          <a href="tel:+48795375541" aria-label="Call Olesia Kubska">
            +48 795 375 541
          </a>
        </ContactDetails>
      </LeftSide>
      <ProfileImage src={contactImage} alt="Olesia Kubska" />
      <RightSide>
        <h3>{t("contactMe")}</h3>
        <Formik
          initialValues={{ email: "", message: "" }}
          onSubmit={(values, actions) => {
            // Here you can handle form submission by, for example, sending values to an API
            console.log(values);
            actions.setSubmitting(false);
          }}
        >
          {() => (
            <ContactForm>
              <Field
                name="email"
                type="email"
                placeholder={t("yourEmail")}
                required
              />
              <Field
                name="message"
                as="textarea"
                placeholder={t("yourMessage")}
                required
              />
              <button type="submit">{t("send")}</button>
            </ContactForm>
          )}
        </Formik>
      </RightSide>
    </ContactContainer>
  );
};

export default Contact;
