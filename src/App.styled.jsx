import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 max-width: 1200px;
 margin: 0 auto;
 padding: 0 20px;
 border: 1px solid red;

 @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
  padding: 0 10px;
 }
`;
