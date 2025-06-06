import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled(motion.div)`
 padding: 2rem;
 /* max-width: 900px; */
 margin: 0 auto;
 text-align: center;

 h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
 }

 p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: left;
 }
`;

export const SkillsSection = styled(motion.section)`
 margin-top: 2rem;
 text-align: left;

 h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
 }
`;

export const SkillsList = styled(motion.ul)`
 list-style-type: none;
 padding: 0;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 gap: 1rem;

 li {
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: background 0.3s, color 0.3s;

  &:hover {
   background-color: ${({ theme }) => theme.buttonHover};
   color: ${({ theme }) => theme.buttonColorHover};
  }
 }
`;

export const InfoContainer = styled(motion.div)`
 display: flex;
 justify-content: center;
 gap: 20px;
 margin-top: 2rem;
 margin-bottom: 2rem;

 a {
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: background 0.3s, color 0.3s;

  &:hover {
   background-color: ${({ theme }) => theme.buttonHover};
   color: ${({ theme }) => theme.buttonColorHover};
  }
 }
`;
