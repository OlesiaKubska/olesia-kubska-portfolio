import styled from "styled-components";

export const ProjectsContainer = styled.div`
  padding: 2rem 1rem;

  h2 {
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const ToggleButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;
