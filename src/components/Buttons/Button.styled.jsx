import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.8rem 1.6rem;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: background-color 0.3s, transform 0.3s, color 0.3s, border 0.3s;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.buttonBackground};
    border: 2px solid ${({ theme }) => theme.buttonBackground};
    transform: scale(1.05);
  }
`;

export const StyledButtonSecondary = styled.button`
  padding: 0.8rem 1.6rem;
  background-color: transparent;
  color: ${({ theme }) => theme.buttonBackground};
  border: 2px solid ${({ theme }) => theme.buttonBackground};
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: background-color 0.3s, transform 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.body};
    transform: scale(1.05);
  }
`;
