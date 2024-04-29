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
 height: 100vh;
 width: 100%;
 max-width: 1200px;
 margin: 0 auto;
 padding: 20px;
`;

export const ProfilePhoto = styled.img`
 width: 100%;
 max-width: 280px;
 height: 280px;
 border-radius: 50%;
 margin-bottom: 20px;
 object-fit: cover;
`;

export const Button = styled.a`
 display: inline-block;
 background-color: ${({ theme }) => theme.buttonBackground};
 color: ${({ theme }) => theme.text};
 text-align: center;
 padding: 10px 20px;
 margin: 5px;
 border: 1px solid ${({ theme }) => theme.borderColor};
 border-radius: 5px;
 transition: background-color 0.3s, transform 0.2s ease;
 text-decoration: none;

 &:hover {
  background-color: ${({ theme }) => theme.buttonHover};
  transform: scale(1.05);
 }

 &:active {
  transform: scale(0.95);
 }

 @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
  padding: 8px 16px;
 }
`;
