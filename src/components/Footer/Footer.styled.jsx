import styled from "styled-components";

export const FooterContainer = styled.footer`
 background-color: ${({ theme }) => theme.body};
 color: ${({ theme }) => theme.text};
 padding: 1rem;
 text-align: center;
`;

export const ContactInfo = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 1rem;
 margin-bottom: 1rem;
 flex-wrap: wrap;
`;

export const SocialLink = styled.a`
 color: ${({ theme }) => theme.text};
`;
