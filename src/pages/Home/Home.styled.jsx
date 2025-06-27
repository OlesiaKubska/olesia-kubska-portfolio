import styled from "styled-components";
import { motion } from "framer-motion";

import imgHomeDesk from "../../assets/images/background/background-desktop.png";
import imgHomeMob from "../../assets/images/background/background-mobile.png";
import imgHomeTabl from "../../assets/images/background/background-tablet.png";

export const HomeBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-position: center;
  background-image: url(${imgHomeMob});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    background-image: url(${imgHomeTabl});
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    background-image: url(${imgHomeDesk});
  }
`;

export const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.homeBackground};
  overflow: hidden;

  h1,
  p {
    text-align: center;
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

export const ProfilePhoto = styled.img`
  width: 100%;
  max-width: 280px;
  height: 280px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 180px;
    margin-bottom: 15px;
    border-radius: 20%;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  gap: 10px;
`;

export const Button = styled.a`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  padding: 0.5rem 1rem;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: background-color 0.3s, transform 0.2s ease;

  &:hover {
    background-color: transparent;
    transform: scale(1.05);
    color: ${({ theme }) => theme.buttonBackground};
    border: 2px solid ${({ theme }) => theme.buttonBackground};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 0.8rem 1.6rem;
    font-size: 16px;
  }
`;

export const ButtonSecondary = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.buttonBackground};
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 14px;
  border: 2px solid ${({ theme }) => theme.buttonBackground};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: background-color 0.3s, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackground};
    transform: scale(1.05);
    color: ${({ theme }) => theme.body};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 0.8rem 1.6rem;
    font-size: 16px;
  }
`;

export const AboutContent = styled(motion.div)`
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 3rem 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding: 4rem 2rem;
  }
`;

export const SkillGridContainer = styled(motion.div)`
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 3rem 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding: 4rem 2rem;
  }
`;
