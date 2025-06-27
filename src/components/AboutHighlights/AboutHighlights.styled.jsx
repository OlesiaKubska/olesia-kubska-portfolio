import styled from "styled-components";

export const HighlightsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2rem 0;
  }
`;

export const HighlightCard = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: all 0.3s ease-in-out;
  width: 100%;
  max-width: 350px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 0.75rem;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-3px);
  }

  svg {
    color: ${({ theme }) => theme.accent};
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${({ theme }) => theme.textSecondary};
  }

  p {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 2rem;
  }
`;
