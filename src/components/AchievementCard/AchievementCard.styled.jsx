import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;
  width: 260px;
  max-width: 100%;
  height: 100%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 400px;
    max-height: 600px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 480px;
    max-height: 740px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 440px;
    max-height: 680px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 320px;
  object-fit: cover;
  flex-shrink: 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-height: 400px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    max-height: 540px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    max-height: 480px;
  }
`;

export const CardContent = styled.div`
  padding: 0.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 1rem;
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
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.accent};

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 1.1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 1.4rem;
  }
`;

export const Description = styled.div`
  font-size: 0.85rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.4;

  p + p {
    margin-top: 0.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 1.35rem;
  }
`;

export const School = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.accent};
  font-style: italic;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 0.9rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 1.25rem;
  }
`;
