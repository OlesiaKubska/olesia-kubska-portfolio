import styled from "styled-components";

// export const ContactInfo = styled.div`
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  gap: 1rem;
//  margin-bottom: 1rem;
//  flex-wrap: wrap;
// `;

// export const SocialLink = styled.a`
//  color: ${({ theme }) => theme.text};
// `;

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.body};
  padding: 2rem 1rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
      color: ${({ theme }) => theme.toggleBorder};
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.toggleBorder};
  }
`;

export const Copyright = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text};

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 1rem;
  }
`;
