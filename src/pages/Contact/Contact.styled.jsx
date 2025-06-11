import styled from "styled-components";
import { Form } from "formik";
import { motion } from "framer-motion";

export const ContactContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.background};
  text-align: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: center;
    padding: 3rem 4rem;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  h3 {
    font-size: 1.2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 40%;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.toggleBorder};
    }
  }
`;

export const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 220px;
    height: 220px;
  }
`;

export const RightSide = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 55%;
  }
`;

export const ContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;

  input[type="text"],
  input[type="email"],
  textarea {
    padding: 10px;
    margin-bottom: 1rem;
    border: 2px solid ${({ theme }) => theme.borderColor};
    border-radius: 4px;
    font-size: 16px;
    font-family: inherit;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};

    &::placeholder {
      font-size: 16px;
      color: ${({ theme }) => theme.text};
      opacity: 0.7;
      font-family: inherit;
    }

    &:focus {
      border-color: ${({ theme }) => theme.toggleBorder};
      outline: none;
    }
  }

  textarea {
    height: 150px;
    resize: none;
  }

  button {
    padding: 10px 15px;
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonColor};
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.2s, color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.buttonHover};
      color: ${({ theme }) => theme.buttonColorHover};
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: color 0.3s transform 0.2s;

    &:hover {
      color: ${({ theme }) => theme.toggleBorder};
      transform: scale(1.2);
    }
  }
`;

export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-start;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.toggleBorder};
    }
  }
`;

export const IconStyled = styled.div`
  svg {
    color: ${({ name, theme }) =>
      name === "linkedin"
        ? "#0077b5"
        : name === "email"
        ? "#ea4335"
        : name === "phone"
        ? "#34a853"
        : name === "location"
        ? "#fbbc05"
        : theme.text};
    transition: transform 0.2s;
    margin-right: 0.5rem;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
