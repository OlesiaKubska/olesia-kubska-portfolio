import styled from "styled-components";
import { motion } from "framer-motion";

export const AchievementsPage = styled(motion.div)`
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.textSecondary};
  text-align: left;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 2rem;
  }
`;
