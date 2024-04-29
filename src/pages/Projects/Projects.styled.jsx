import styled from "styled-components";

export const ProjectsContainer = styled.div`
 margin: 2rem auto;
 max-width: 800px;
 padding: 1rem;
 background: ${({ theme }) => theme.body};
 color: ${({ theme }) => theme.text};

 h2 {
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
 }

 h3 {
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
 }

 p {
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
 }

 //
 @media (max-width: 768px) {
  h2 {
   font-size: 2rem;
  }

  h3 {
   font-size: 1.5rem;
  }
 }
`;

export const ProjectImage = styled.img`
 width: 100%;
 max-width: 600px;
 border-radius: 12px;
 margin-bottom: 20px;
`;

export const ProjectLink = styled.a`
 display: flex;
 align-items: center;
 margin-bottom: 10px;
 text-decoration: none;
 color: #333;

 &:hover {
  color: #555;
 }

 svg {
  margin-right: 8px;
 }
`;
