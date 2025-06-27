import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 0 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding: 0 3rem;
  }
`;
