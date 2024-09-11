import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color: ${({ theme }) => theme.body};
 padding: 1rem;
 box-shadow: ${({ theme }) => theme.boxShadow};

 @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
  padding: 0.5rem;
 }
`;

export const Navigation = styled.nav`
 display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
 gap: 1rem;
 flex-direction: column;
 position: absolute;
 top: 65px;
 left: 0;
 width: 100%;
 background-color: ${({ theme }) => theme.body};
 padding: 1rem;
 box-shadow: ${({ theme }) => theme.boxShadow};

 @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  display: flex;
  flex-direction: row;
  position: relative;
  width: auto;
  background-color: transparent;
  padding: 0;
  box-shadow: none;
  top: auto;
  left: auto;
 }
`;

export const StyledNavLink = styled(NavLink)`
 color: ${({ theme }) => theme.text};
 text-decoration: none;
 padding: 0.5rem 1rem;

 &.active {
  color: ${({ theme }) => theme.linkHover};
  font-weight: bold;
 }

 &:hover {
  color: ${({ theme }) => theme.toggleBorder};
 }

 @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
  padding: 0.5rem;
  font-size: 0.9rem;
 }
`;

export const BurgerMenuIcon = styled.div`
 display: none;

 @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
  display: block;
  font-size: 2rem;
  cursor: pointer;
 }
`;

export const LanguageSwitcher = styled.div`
 display: flex;
 gap: 20px;

 button {
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  &:hover {
   text-decoration: underline;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
   font-size: 0.9rem;
  }
 }
`;

export const FlagIcon = styled.div`
 width: 20px;
 height: 20px;
 display: inline-block;

 svg {
  width: 100%;
  height: 100%;
 }
`;
