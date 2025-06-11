import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: all 0.50s linear;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-top: 0;
  }

  h1, h2, h3 {
    font-weight: 700;
  }

  p, li, a {
    font-weight: 400;
    line-height: 1.6;
  }

  ul, ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.toggleBorder};
    }

    &:focus {
      outline: 2px solid ${(props) => props.theme.toggleBorder};
    }
  }

.error {
  color: red;
  font-size: 0.85rem;
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
}

.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
