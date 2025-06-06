import styled from "styled-components";

export const NotFoundContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 min-height: 80vh;
`;

export const ErrorMessage = styled.h1`
 font-size: 4rem;
 color: ${({ theme }) => theme.error};
 margin-bottom: 1rem;
`;

export const ErrorText = styled.p`
 font-size: 1.5rem;
 color: ${({ theme }) => theme.error};
`;
