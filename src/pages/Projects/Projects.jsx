import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
 ProjectsContainer,
 ProjectLink,
 ProjectImage,
} from "./Projects.styled";
import projectImage from "../../assets/images/projects/water-tracker.jpg";
import projectHotelImage from "../../assets/images/projects/project-hotel.png";
import projectFilmImage from "../../assets/images/projects/project-cinemania.png";
import projectWebImage from "../../assets/images/projects/project-web.png";

const Projects = () => {
 return (
  <ProjectsContainer>
   <h2>My Projects</h2>
   <div>
    <h3>WATER TRACKER</h3>
    <ProjectImage src={projectImage} alt="Water Tracker Project" />
    <ProjectLink
     href="https://water-tracker-app.netlify.app"
     target="_blank"
     rel="noopener noreferrer"
    >
     <FaExternalLinkAlt size="1.5em" title="Project Page" />
     Pages
    </ProjectLink>
    <p>
     [HTML5, CSS3, JavaScript, React, Redux Toolkit, React Router, Axios, Vite,
     Node]
    </p>
    <ProjectLink
     href="https://github.com/YanLozovskyi/water-tracker?tab=readme-ov-file#technologies-used"
     target="_blank"
     rel="noopener noreferrer"
    >
     <FaGithub size="1.5em" title="GitHub Repository" />
     GitHub
    </ProjectLink>
    <p>
     This description highlights your role, key contributions, and the
     technologies you worked with, offering a clear and concise overview of your
     involvement in the project. This project showcases my ability to develop a
     user-centric application utilizing modern web technologies and API
     integration for a seamless user experience. The application utilizes a
     backend developed by our team. Feel free to familiarize yourself with it
     here.
    </p>
   </div>
   <div>
    <h3>CINEMANIA</h3>
    <ProjectImage src={projectFilmImage} alt="Cinemania Project" />
    <ProjectLink
     href="https://yanlozovskyi.github.io/project-js-web-anonymous/index.html"
     target="_blank"
     rel="noopener noreferrer"
    >
     <FaExternalLinkAlt size="1.5em" title="Project Page" />
     Pages
    </ProjectLink>
    <p>[ JavaScript, HTML5, SCSS, Parcel ]</p>
    <ProjectLink
     href="https://github.com/YanLozovskyi/project-js-web-anonymous"
     target="_blank"
     rel="noopener noreferrer"
    >
     <FaGithub size="1.5em" title="GitHub Repository" />
     GitHub
    </ProjectLink>
    <p>
     In the project, I played a crucial role in developing and enhancing the
     catalog-search section. I was responsible for implementing key
     functionalities using JavaScript and HTML5. Additionally, I took the
     initiative to optimize and refine the user interface by making corrections
     to the SCSS and JavaScript codebase. This experience not only improved my
     technical skills but also honed my problem-solving abilities when dealing
     with intricate challenges.
    </p>
   </div>
   <div>
    <h3>MIMINO HOTEL</h3>
    <ProjectImage src={projectHotelImage} alt="Mimino Hotel Project" />
    <ProjectLink
     href="https://vasylkivt.github.io/team-proj-html-css-web-anonymous/restaurant.html"
     target="_blank"
     rel="noopener noreferrer"
    >
     <FaExternalLinkAlt size="1.5em" title="Project Page" />
     Pages
    </ProjectLink>
    <p>[ HTML5, CSS3, JavaScript, Parcel ]</p>
    <ProjectLink
     href="https://github.com/vasylkivt/team-proj-html-css-web-anonymous"
     target="_blank"
     rel="noopener noreferrer"
    >
     <FaGithub size="1.5em" title="GitHub Repository" />
     GitHub
    </ProjectLink>
    <p>
     Within the project, my primary focus was on designing and developing the
     restaurant menu section. I leveraged HTML5 and CSS3 to create an appealing
     and user-friendly interface. Incorporating JavaScript, I implemented
     interactive features to enhance the overall user experience. This project
     not only allowed me to enhance my front-end development skills but also
     provided insights into effective UI/UX design principles.
    </p>
   </div>
   <div>
    <h3>WEBSTUDIO</h3>
    <ProjectImage src={projectWebImage} alt="Web Studio Project" />
    <ProjectLink
     href="https://olesiakubska.github.io/WEBSTUDIO/"
     target="_blank"
     rel="noopener noreferrer"
    >
     <FaExternalLinkAlt size="1.5em" title="Project Page" />
     Pages
    </ProjectLink>
    <p>[HTML5, CSS3, JavaScript ]</p>
    <ProjectLink
     href="https://github.com/OlesiaKubska/WEBSTUDIO"
     target="_blank"
     rel="noopener noreferrer"
    >
     <FaGithub size="1.5em" title="GitHub Repository" />
     GitHub
    </ProjectLink>
    <p>
     WEBSTUDIO was an educational project that enabled me to apply and
     consolidate my understanding of HTML5 and CSS3. Through this endeavor, I
     gained hands-on experience in building responsive and visually appealing
     web pages. This project served as a foundation for strengthening my web
     development capabilities and understanding the fundamentals of creating
     engaging online content.
    </p>
   </div>
  </ProjectsContainer>
 );
};

export default Projects;
