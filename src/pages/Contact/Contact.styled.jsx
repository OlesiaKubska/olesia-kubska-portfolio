import styled from "styled-components";
import { Form } from "formik";
import { motion } from "framer-motion";

export const ContactContainer = styled(motion.div)`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding: 1rem;
 margin: 2rem auto;
 max-width: 600px;
 background-color: ${({ theme }) => theme.background};
 border-radius: 8px;
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

 h2 {
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
 }
`;

export const ContactForm = styled(Form)`
 display: flex;
 flex-direction: column;
 width: 100%;

 input[type="email"],
 textarea {
  padding: 10px;
  margin-bottom: 1rem;
  border: 2px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  font-size: 16px;

  &:focus {
   border-color: ${({ theme }) => theme.toggleBorder};
   outline: none;
  }
 }

 textarea {
  height: 150px;
  resize: none;
 }

 button {
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s ease;

  &:hover {
   background-color: ${({ theme }) => theme.buttonHover};
   color: ${({ theme }) => theme.buttonColorHover};
   transform: scale(1.05);
  }

  &:active {
   transform: scale(0.95);
  }
 }
`;
