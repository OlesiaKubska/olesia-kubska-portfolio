import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled(motion.div)`
  margin: 0 auto;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.textSecondary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    h2 {
      font-size: 2.5rem;
    }
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding-top: 4rem;
    padding-bottom: 4rem;
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

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    h3 {
      font-size: 1.8rem;
    }
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  max-width: 280px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  align-self: center;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: transform 0.3s ease-in-out;
  margin: 0 auto;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 300px;
    height: auto;
  }
`;
