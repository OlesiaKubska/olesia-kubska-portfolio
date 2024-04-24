import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";

const ContactContainer = styled(motion.div)`
 padding: 2rem;
`;

const ContactForm = styled(Form)`
 display: flex;
 flex-direction: column;
`;

const Contact = () => {
 return (
  <ContactContainer
   initial={{ scale: 0.8, opacity: 0 }}
   animate={{ scale: 1, opacity: 1 }}
   exit={{ scale: 0.5, opacity: 0 }}
  >
   <h2>Contact Me</h2>
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
      <Field name="email" type="email" placeholder="Your Email" />
      <Field name="message" as="textarea" placeholder="Your Message" />
      <button type="submit">Send</button>
     </ContactForm>
    )}
   </Formik>
  </ContactContainer>
 );
};

export default Contact;
