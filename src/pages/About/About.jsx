import { Outlet, Link } from "react-router-dom";
import {
 AboutContainer,
 InfoContainer,
 SkillsSection,
 SkillsList,
} from "./About.styled";

const About = () => {
 return (
  <AboutContainer
   initial={{ x: -200, opacity: 0 }}
   animate={{ x: 0, opacity: 1 }}
   exit={{ x: 200, opacity: 0 }}
   transition={{ type: "spring", stiffness: 100 }}
  >
   <InfoContainer>
    <Link to="work">WorkExperience</Link>
    <Link to="education">Education</Link>
   </InfoContainer>
   <Outlet />
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
   <SkillsSection>
    <h3>Tech Skills</h3>
    <SkillsList>
     <li>JavaScript</li>
     <li>Node.js</li>
     <li>MongoDB</li>
     <li>SQL</li>
     <li>HTTP</li>
     <li>Postman</li>
     <li>Swagger</li>
     <li>React.js</li>
     <li>Vite</li>
     <li>Angular</li>
     <li>GIT</li>
     <li>Parcel</li>
     <li>WebPack</li>
     <li>CSS Grid</li>
     <li>SCSS</li>
     <li>CSS3</li>
     <li>HTML5</li>
     <li>Scrum</li>
     <li>Agile</li>
    </SkillsList>
   </SkillsSection>

   <SkillsSection>
    <h3>Soft Skills</h3>
    <SkillsList>
     <li>Organized</li>
     <li>Teamwork</li>
     <li>Communication</li>
     <li>Creative</li>
     <li>Decision-making</li>
     <li>Ability to Learn</li>
     <li>Time Management</li>
    </SkillsList>
   </SkillsSection>

   <SkillsSection>
    <h3>Languages</h3>
    <SkillsList>
     <li>Ukrainian - Native</li>
     <li>Russian - Fluent</li>
     <li>English - Pre-Intermediate</li>
     <li>Polish - Upper-Intermediate (Certificate B2)</li>
    </SkillsList>
   </SkillsSection>
  </AboutContainer>
 );
};

export default About;
