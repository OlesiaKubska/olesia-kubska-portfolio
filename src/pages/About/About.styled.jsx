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

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 300px;
    height: 100%;
  }
`;

export const AboutBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  gap: 1.5rem;

  p {
    font-size: 1rem;
    line-height: 1.25;
    margin-bottom: 1.5rem;
    text-align: left;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
      p {
        font-size: 1.7rem;
      }
  }
`;
