import styled, { keyframes } from "styled-components";

export const Spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme.borderColor || "#ccc"};
  border-top: 4px solid ${({ theme }) => theme.toggleBorder || "#6B46C1"};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: ${Spin} 1s linear infinite;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
