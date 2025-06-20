import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    flex-direction: row;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);
    }
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-height: 240px;
  object-fit: cover;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-height: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 50%;
    max-height: 100%;
  }
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.textSecondary};

    @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.text};
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  margin: 0.5rem 0;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.textSecondary};
    font-weight: 500;
    transition: color 0.3s, transform 0.3s;

    &:hover {
      color: ${({ theme }) => theme.accent};
      transform: scale(1.05);
    }
  }
`;
