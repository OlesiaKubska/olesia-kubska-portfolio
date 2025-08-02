import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-5px);
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  border-radius: 6px;
  padding: 0.4rem 0.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 500;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: background-color 0.3s, transform 0.3s, color 0.3s, border 0.3s;

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.buttonBackground};
    border: 2px solid ${({ theme }) => theme.buttonBackground};
    transform: scale(1.05);
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 0.4rem 0;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  min-width: 100px;
  z-index: 1000;

  animation: ${({ $isOpen }) => ($isOpen ? fadeIn : fadeOut)} 0.2s ease forwards;

  li {
    padding: 0.4rem 0.7rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: ${({ theme }) => theme.text};
    transition: background 0.2s, color 0.2s;

    &:hover {
      background: ${({ theme }) => theme.accent};
      color: ${({ theme }) => theme.buttonColor};
    }
  }
`;

export const FlagIcon = styled.span`
  font-size: 1.2rem;
  line-height: 1;
`;
