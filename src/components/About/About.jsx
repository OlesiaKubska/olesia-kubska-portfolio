import styled from "styled-components";
import { motion } from "framer-motion";

const AboutContainer = styled(motion.div)`
 padding: 2rem;
`;

const About = () => {
 return (
  <AboutContainer
   initial={{ x: -200, opacity: 0 }}
   animate={{ x: 0, opacity: 1 }}
   exit={{ x: 200, opacity: 0 }}
   transition={{ type: "spring", stiffness: 100 }}
  >
   <h2>About Me</h2>
   <p>
    I am a driven Junior Full Stack developer with a solid year of hands-on
    experience. My focus lies in harnessing the power of Angular, React, Node,
    JS, HTML5, CSS3, CSS Grid and SCSS to create immersive web experiences.
    Additionally, I possess a Pre-Intermediate level of proficiency in English,
    allowing me to effectively communicate and collaborate with diverse teams.
    Currently, I am actively seeking a full-time position where I can contribute
    my skills and continue to grow as a professional. I am characterized by my
    insatiable curiosity and unwavering commitment to learning, always eager to
    acquire new knowledge and enhance my expertise.
   </p>
   <p>Skills: HTML, CSS, JavaScript, React, Redux...</p>
  </AboutContainer>
 );
};

export default About;
