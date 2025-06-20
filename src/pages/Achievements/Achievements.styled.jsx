import styled from "styled-components";

export const AchievementsPage = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.textSecondary};
  text-align: left;
`;
