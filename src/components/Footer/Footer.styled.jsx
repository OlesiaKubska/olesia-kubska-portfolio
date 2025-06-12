import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.body};
  padding: 3rem 1rem 2rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.footerShadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 4rem 2rem 2rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  display: inline-block;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  img {
    max-width: 120px;
    height: auto;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  a {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.toggleBorder};
    }

    a.active {
      font-weight: 600;
      text-decoration: underline;
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.toggleBorder};
    transform: scale(1.2);
  }

  svg {
    vertical-align: middle;
  }
`;

export const Copyright = styled.div`
  font-size: 0.85rem;
  opacity: 0.75;
  text-align: center;
  color: ${({ theme }) => theme.text};

  span {
    margin: 0 0.3rem;
  }

  span[role="img"] {
    display: inline-block;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 0.95rem;
  }
`;
