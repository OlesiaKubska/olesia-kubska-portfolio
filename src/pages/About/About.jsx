import { Outlet, Link } from "react-router-dom";
import { AboutContainer, InfoContainer, SkillsSection } from "./About.styled";
import { useTranslation } from "react-i18next";
import {
  SkillGrid,
  SoftSkillGrid,
  LanguageGrid,
} from "../../components/SkillGrid";

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
      <SkillsSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>{t("techSkills")}</h3>
        <SkillGrid />
      </SkillsSection>
      <SkillsSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>{t("softSkills")}</h3>
        <SoftSkillGrid />
      </SkillsSection>
      <SkillsSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>{t("languages")}</h3>
        <LanguageGrid />
      </SkillsSection>
    </AboutContainer>
  );
};

export default About;
