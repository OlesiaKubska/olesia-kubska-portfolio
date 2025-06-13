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
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.homeBackground};
  overflow: hidden;

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 10px;
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
`;

export const Button = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.buttonColor};
  text-align: center;
  padding: 0.8rem 1.6rem;
  margin: 5px;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: background-color 0.3s, transform 0.2s ease;

  &:hover {
    background-color: transparent;
    transform: scale(1.05);
    color: ${({ theme }) => theme.accent};
    border: 2px solid ${({ theme }) => theme.accent};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const ButtonSecondary = styled.a`
  display: inline-block;
  background-color: transparent;
  color: ${({ theme }) => theme.accent};
  text-align: center;
  padding: 0.8rem 1.6rem;
  margin: 5px;
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.accent};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: background-color 0.3s, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    transform: scale(1.05);
    color: ${({ theme }) => theme.body};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const SkillGridContainer = styled(motion.div)`
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;
