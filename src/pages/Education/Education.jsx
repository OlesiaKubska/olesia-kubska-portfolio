import {
 EducationContainer,
 Title,
 University,
 Info,
 Item,
} from "./Education.styled";
import { useTranslation } from "react-i18next";

const Education = () => {
 const { t } = useTranslation();

 return (
  <EducationContainer>
   <Title>{t("educationTitle")}</Title>
   <University>
    <Item>
     {t("bialystokUniversity")}
     <Info>{t("jsDeveloperCourse")}</Info>
    </Item>
    <Item>
     {t("golTSchool")}
     <Info>{t("fullStackCourse")}</Info>
    </Item>
    <Item>
     {t("dragomanovUniversityManagement")}
     <Info>{t("managementCourse")}</Info>
    </Item>
    <Item>
     {t("dragomanovUniversityMusic")}
     <Info>{t("musicCourse")}</Info>
    </Item>
   </University>
  </EducationContainer>
 );
};

export default Education;
