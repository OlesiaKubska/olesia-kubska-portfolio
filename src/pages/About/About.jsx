import { Outlet, Link } from "react-router-dom";
import {
 AboutContainer,
 InfoContainer,
 SkillsSection,
 SkillsList,
} from "./About.styled";
import { useTranslation } from "react-i18next";

const About = () => {
 const { t } = useTranslation();

 return (
  <AboutContainer
   initial={{ x: -200, opacity: 0 }}
   animate={{ x: 0, opacity: 1 }}
   exit={{ x: 200, opacity: 0 }}
   transition={{ type: "spring", stiffness: 100 }}
  >
   <InfoContainer>
    <Link to="work">{t("workExperience")}</Link>
    <Link to="education">{t("education")}</Link>
   </InfoContainer>
   <Outlet />
   <h2>{t("aboutMeTitle")}</h2>
   <p>{t("aboutDescription")}</p>
   <SkillsSection>
    <h3>{t("techSkills")}</h3>
    <SkillsList>
     {t("techSkillItems", { returnObjects: true }).map((skill, index) => (
      <li key={index}>{skill}</li>
     ))}
    </SkillsList>
   </SkillsSection>

   <SkillsSection>
    <h3>{t("softSkills")}</h3>
    <SkillsList>
     {Object.keys(t("softSkillItems", { returnObjects: true })).map((key) => (
      <li key={key}>{t(`softSkillItems.${key}`)}</li>
     ))}
    </SkillsList>
   </SkillsSection>

   <SkillsSection>
    <h3>{t("languages")}</h3>
    <SkillsList>
     {Object.keys(t("languagesList", { returnObjects: true })).map((key) => (
      <li key={key}>{t(`languagesList.${key}`)}</li>
     ))}
    </SkillsList>
   </SkillsSection>
  </AboutContainer>
 );
};

export default About;
