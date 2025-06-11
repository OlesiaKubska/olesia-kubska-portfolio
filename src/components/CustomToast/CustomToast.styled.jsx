import styled from "styled-components";

export const ToastWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-left: 5px solid
    ${({ success, theme }) => (success ? theme.success : theme.error)};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  font-size: 0.9rem;
  max-width: 320px;
`;
