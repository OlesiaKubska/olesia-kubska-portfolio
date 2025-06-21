import styled from "styled-components";

export const AchievementsPage = styled.div`
  padding: 2rem 0;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.textSecondary};
  text-align: left;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 2rem;
  }
`;
