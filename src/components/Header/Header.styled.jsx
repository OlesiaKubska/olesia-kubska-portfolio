import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color: ${({ theme }) => theme.body};
 padding: 1rem;
 box-shadow: ${({ theme }) => theme.boxShadow};
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
`;

export const BurgerMenuIcon = styled.div`
 display: none;

 @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
  display: block;
  font-size: 1.5rem;
  cursor: pointer;
 }
`;
