import {
  HomeBackground,
  HomeContainer,
  ProfilePhoto,
  Button,
  ButtonSecondary,
  ButtonBox,
  SkillGridContainer,
  AboutContent,
} from "./Home.styled";
import homeImage from "../../assets/images/Home/olesia-kubska.png";
import { useTranslation } from "react-i18next";
import { SkillGrid } from "../../components/SkillGrid";
import Contact from "../../pages/Contact/Contact";
import AboutHighlights from "../../components/AboutHighlights/AboutHighlights";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <HomeBackground>
        <HomeContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div>
            <h1>{t("homeTitle")}</h1>
            <p>{t("homeDescription")}</p>
          </div>
          <ProfilePhoto src={homeImage} alt="Olesia Kubska" />
          <ButtonBox>
            <Button href="olesia-kubska-portfolio/projects">
              {t("viewWork")}
            </Button>
            <ButtonSecondary href="olesia-kubska-portfolio/contact">
              {t("contactMe")}
            </ButtonSecondary>
            <Button
              href="./docs/OlesiaKubskaCV.pdf"
              download="OlesiaKubskaCV.pdf"
            >
              {t("downloadResume")}
            </Button>
          </ButtonBox>
        </HomeContainer>
      </HomeBackground>
      <AboutContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h3>{t("aboutMe")}</h3>
        <AboutHighlights />
      </AboutContent>
      <SkillGridContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h3>{t("techSkills")}</h3>
        <SkillGrid />
      </SkillGridContainer>
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Home;
