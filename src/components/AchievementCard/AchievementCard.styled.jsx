import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 420px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    max-width: 480px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 420px;
  object-fit: cover;
  flex-shrink: 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-height: 500px;
  }
`;

export const CardContent = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 0.75rem;
  }

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.accent} transparent;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.accent};
    border-radius: 6px;
  }
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.accent};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 0.95rem;
  }
`;

export const Description = styled.div`
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.4;

  p + p {
    margin-top: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 0.85rem;
  }
`;

export const School = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.accent};
  font-style: italic;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 0.75rem;
  }
`;
