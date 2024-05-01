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
 display: flex;
 gap: 1rem;
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
