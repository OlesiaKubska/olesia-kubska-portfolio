import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsContainer = styled(motion.div)`
  padding-top: 2rem;
  padding-bottom: 2rem;

  h2 {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.textSecondary};
    text-align: center;

    @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      font-size: 2rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

export const ToggleButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;
