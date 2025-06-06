import {
 HomeBackground,
 HomeContainer,
 ProfilePhoto,
 Button,
 ButtonBox,
} from "./Home.styled";
import homeImage from "../../assets/images/Home/olesia-kubska.png";
import { useTranslation } from "react-i18next";

const Home = () => {
 const { t } = useTranslation();

 return (
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
     <Button href="olesia-kubska-portfolio/projects">{t("viewWork")}</Button>
     <Button href="olesia-kubska-portfolio/contact">{t("contactMe")}</Button>
     <Button href="./docs/OlesiaKubskaCV.pdf" download="OlesiaKubskaCV.pdf">
      {t("downloadResume")}
     </Button>
    </ButtonBox>
   </HomeContainer>
  </HomeBackground>
 );
};

export default Home;
