import styled from "styled-components";
import { motion } from "framer-motion";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  justify-items: center;
  padding: 1rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 2rem;
    padding: 2rem 0;
  }
`;

export const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  text-align: center;
  transition: transform 0.3s ease;
  color: ${({ theme }) => theme.text};

  img {
    width: 48px;
    height: 48px;
    margin-bottom: 0.5rem;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
