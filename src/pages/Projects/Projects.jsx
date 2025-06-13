import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  ProjectsContainer,
  ProjectLink,
  ProjectImage,
} from "./Projects.styled";
import { useTranslation } from "react-i18next";

import projectWebImage from "../../assets/images/projects/project-web.png";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projectsData } from "../../data/projectsData";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <ProjectsContainer>
      <h2>{t("projectsPage")}</h2>
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}

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
          consolidate my understanding of HTML5 and CSS3. Through this endeavor,
          I gained hands-on experience in building responsive and visually
          appealing web pages. This project served as a foundation for
          strengthening my web development capabilities and understanding the
          fundamentals of creating engaging online content.
        </p>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
