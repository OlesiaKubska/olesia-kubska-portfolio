import {
 HomeBackground,
 HomeContainer,
 ProfilePhoto,
 Button,
 ButtonBox,
} from "./Home.styled";
import homeImage from "../../assets/images/Home/olesia-kubska.png";

const Home = () => {
 return (
  <HomeBackground>
   <HomeContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
   >
    <div>
     <h1>Starting on a New Key: From Music to Coding</h1>
     <p>
      I am Olesia Kubska, a passionate Full Stack Developer dedicated to
      building and optimizing interactive, user-friendly, and feature-rich
      websites. Ready to enhance the digital footprint of your business?
     </p>
    </div>
    <ProfilePhoto src={homeImage} alt="Olesia Kubska" />
    <ButtonBox>
     <Button href="olesia-kubska-portfolio/projects">View My Work</Button>
     <Button href="olesia-kubska-portfolio/contact">Contact Me</Button>
     <Button href="path_to_your_resume.pdf" download="Olesia Kubska.pdf">
      Download Resume
     </Button>
    </ButtonBox>
   </HomeContainer>
  </HomeBackground>
 );
};

export default Home;
