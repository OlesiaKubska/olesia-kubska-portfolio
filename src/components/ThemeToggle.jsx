import { func, string } from "prop-types";
import styled from "styled-components";

const Button = styled.button`
 background: ${({ theme }) => theme.background};
 border: 2px solid ${({ theme }) => theme.toggleBorder};
 color: ${({ theme }) => theme.text};
 border-radius: 30px;
 cursor: pointer;
 font-size: 0.8rem;
 padding: 0.6rem;
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
 return (
  <Button onClick={toggleTheme}>
   Switch to {theme === "light" ? "Dark" : "Light"} Theme
  </Button>
 );
};

ThemeToggle.propTypes = {
 theme: string.isRequired,
 toggleTheme: func.isRequired,
};

export default ThemeToggle;
