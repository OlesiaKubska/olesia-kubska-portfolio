import styled from "styled-components";

export const ProjectsContainer = styled.div`
  padding: 2rem 1rem;

  h2 {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.textSecondary};

    @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      font-size: 2rem;
    }
  }
`;

export const ToggleButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;
