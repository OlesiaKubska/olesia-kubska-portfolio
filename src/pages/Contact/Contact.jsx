import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import CustomToast from "../../components/CustomToast/CustomToast";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaSpinner,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import {
  ContactContainer,
  ContactForm,
  SocialLinks,
  LeftSide,
  RightSide,
  ProfileImage,
  ContactDetails,
  ContactRow,
  IconStyled,
} from "./Contact.styled";
import contactImage from "../../assets/images/contact/resume.jpg";

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();

  const validationSchema = Yup.object({
    name: Yup.string().required(t("validation.nameRequired")),
    email: Yup.string()
      .email(t("validation.emailInvalid"))
      .required(t("validation.emailRequired")),
    message: Yup.string()
      .min(10, t("validation.messageMin"))
      .required(t("validation.messageRequired")),
  });

  const sendEmail = (values, actions) => {
    emailjs
      .sendForm(
        "service_etpub1j",
        "template_7fqvyi8",
        formRef.current,
        "oPRJb_36B0xslymRX"
      )
      .then(
        () => {
          toast(<CustomToast message={t("form.success")} success />);
          actions.resetForm();
        },
        (error) => {
          toast(
            <CustomToast
              message={t("form.error") + error.text}
              success={false}
            />
          );
        }
      )
      .finally(() => {
        actions.setSubmitting(false);
      });
  };

  return (
    <ContactContainer
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <LeftSide>
        <h3>{t("connect")}</h3>
        <SocialLinks>
          <a
            href="https://github.com/olesiakubska"
            target="_blank"
            rel="noreferrer"
          >
            <IconStyled name="github">
              <FaGithub size="1.5em" />
            </IconStyled>
          </a>
          <a
            href="https://linkedin.com/in/olesia-kubska"
            target="_blank"
            rel="noreferrer"
          >
            <IconStyled name="linkedin">
              <FaLinkedin size="1.5em" />
            </IconStyled>
          </a>
        </SocialLinks>
        <ContactDetails>
          <ContactRow>
            <IconStyled name="email">
              <FaEnvelope size="1.5em" />
            </IconStyled>
            <a href="mailto:kublesia0908@gmail.com" aria-label="Send email">
              kublesia0908@gmail.com
            </a>
          </ContactRow>
          <ContactRow>
            <IconStyled name="phone">
              <FaPhoneAlt size="1.5em" />
            </IconStyled>
            <a href="tel:+48795375541" aria-label="Call Olesia Kubska">
              +48 795 375 541
            </a>
          </ContactRow>
          <ContactRow>
            <IconStyled name="location">
              <FaMapMarkerAlt size="1.5em" />
            </IconStyled>
            <a
              href="https://www.google.com/maps/place/Bialystok,+Poland"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bialystok, Poland
            </a>
          </ContactRow>
        </ContactDetails>
      </LeftSide>
      <ProfileImage src={contactImage} alt="Olesia Kubska" />
      <RightSide>
        <h3>{t("contactMe")}</h3>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={sendEmail}
        >
          {({ isSubmitting }) => (
            <ContactForm as={Form} ref={formRef}>
              <Field
                name="name"
                type="text"
                placeholder={t("yourName")}
                required
              />
              <ErrorMessage name="name" component="div" className="error" />
              <Field
                name="email"
                type="email"
                placeholder={t("yourEmail")}
                required
              />
              <ErrorMessage name="email" component="div" className="error" />
              <Field
                name="message"
                as="textarea"
                placeholder={t("yourMessage")}
                required
              />
              <ErrorMessage name="message" component="div" className="error" />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <FaSpinner className="spin" /> {t("sending")}
                  </span>
                ) : (
                  t("send")
                )}
              </button>
            </ContactForm>
          )}
        </Formik>
      </RightSide>
    </ContactContainer>
  );
};

export default Contact;
