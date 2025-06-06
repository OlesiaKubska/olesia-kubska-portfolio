import {
 ExperienceContainer,
 Title,
 Info,
 DetailItem,
 Details,
 Position,
} from "./WorkExperience.styled";

const WorkExperience = () => {
 return (
  <ExperienceContainer>
   <Title>Work Experience</Title>
   <Position>
    <Info>
     Teacher Assistant, Elementary School No. 4, Bialystok, Poland. (2022-2023)
    </Info>
    <Details>
     <DetailItem>
      Assisted students from Ukraine in adapting to a foreign country
     </DetailItem>
     <DetailItem>
      Serving as a Polish-Ukrainian translator between students, parents,
      administration, and teachers
     </DetailItem>
    </Details>
   </Position>
   <Position>
    <Info>
     Music Teacher, Specialized School No. 106 with Intensive English Language
     Learning, Kyiv, Ukraine. (2013-2022)
    </Info>
    <Details>
     <DetailItem>
      Conducted music and art lessons and acted as a homeroom teacher
     </DetailItem>
     <DetailItem>Served as the secretary of the pedagogical council</DetailItem>
     <DetailItem>
      Participated in the Teacher of the Year 2022 competition
     </DetailItem>
     <DetailItem>For my work I have been awarded and distinguished</DetailItem>
    </Details>
   </Position>
  </ExperienceContainer>
 );
};

export default WorkExperience;
