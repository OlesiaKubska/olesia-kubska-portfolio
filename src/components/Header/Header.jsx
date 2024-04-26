import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Logo/Logo";

const HeaderContainer = styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color: #fff;
 padding: 1rem;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Navigation = styled.nav`
 display: flex;
 gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
 color: #333;
 text-decoration: none;
 padding: 0.5rem 1rem;
 &.active {
  color: #007bff;
 }
 &:hover {
  color: #0056b3;
 }
`;

const Header = () => {
 return (
  <HeaderContainer>
   <Logo />
   {/* <h2>Olesia Kubska</h2>
   <h3>Junior Full Stack Developer</h3> */}
   <Navigation>
    <StyledNavLink to="/" end>
     Home
    </StyledNavLink>
    <StyledNavLink to="/about">About</StyledNavLink>
    <StyledNavLink to="/projects">Projects</StyledNavLink>
    <StyledNavLink to="/contact">Contact</StyledNavLink>
   </Navigation>
  </HeaderContainer>
 );
};

export default Header;
