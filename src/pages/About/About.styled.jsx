import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled(motion.div)`
  padding: 2rem;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.textSecondary};
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
    color: ${({ theme }) => theme.textSecondary};
  }
`;
