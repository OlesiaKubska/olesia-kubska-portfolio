import styled from "styled-components";

export const EducationContainer = styled.div`
  position: relative;
  padding: 2rem 0.5rem;
  background-color: ${({ theme }) => theme.background};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin: 0 auto 1rem auto;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 2rem;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.accent};
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.accent};
  text-align: center;
  margin-bottom: 1.5rem;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 2rem;
  }
`;
