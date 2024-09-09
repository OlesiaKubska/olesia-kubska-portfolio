import {
 EducationContainer,
 Title,
 University,
 Info,
 Item,
} from "./Education.styled";

const Education = () => {
 return (
  <EducationContainer>
   <Title>Education</Title>
   <University>
    <Item>
     Bialystok University of Technology | Poland
     <Info>“JavaScript Developer” | October 2023 - July 2024</Info>
    </Item>
    <Item>
     IT School GolT | Ukraine
     <Info>“Full Stack Developer” | 2023 – 2024 | CERTIFICATE</Info>
    </Item>
    <Item>
     National Pedagogical Dragomanov University | Ukraine
     <Info>
      “Education institution management” | 2014 – 2016 | MASTER | Business,
      office and organization manager
     </Info>
    </Item>
    <Item>
     National Pedagogical Dragomanov University | Ukraine
     <Info>
      “Musical art” | 2010 - 2015 | MASTER | Methods of musical education
      teacher (lecturer), music teacher and choir master
     </Info>
    </Item>
   </University>
  </EducationContainer>
 );
};

export default Education;
