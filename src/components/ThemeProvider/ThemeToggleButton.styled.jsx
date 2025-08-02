import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.buttonBackground};
  border: 2px solid ${({ theme }) => theme.buttonBackground};
  background-color: transparent;
  border-radius: 30px;
  font-size: 0.8rem;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: background-color 0.3s, transform 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.body};
    transform: scale(1.05);
  }
`;
