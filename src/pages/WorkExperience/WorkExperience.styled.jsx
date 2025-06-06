import styled from "styled-components";

export const ExperienceContainer = styled.div`
 padding: 20px;
 background-color: ${({ theme }) => theme.body};
 border-radius: 8px;
 box-shadow: ${({ theme }) => theme.boxShadow};
 margin: 20px;
 background-color: ${({ theme }) => theme.background};
`;

export const Position = styled.div`
 margin-bottom: 15px;
`;

export const Title = styled.h2`
 color: ${({ theme }) => theme.linkHover};
 font-size: 1.5em;
 display: flex;
 justify-content: center;
`;

export const Info = styled.p`
 font-size: 1em;
 color: ${({ theme }) => theme.text};
 line-height: 1.4;
 font-weight: bold;
`;

export const Details = styled.ul`
 list-style-type: disc;
 margin-left: 20px;
 color: ${({ theme }) => theme.text};
`;

export const DetailItem = styled.li`
 margin-bottom: 10px;
`;
