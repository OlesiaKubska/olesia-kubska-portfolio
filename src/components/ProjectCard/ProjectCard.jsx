import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
  CardContainer,
  ProjectImage,
  ProjectContent,
  ProjectLinks,
  ImageWrapper,
} from "./ProjectCard.styled";

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  return (
    <CardContainer>
      <ImageWrapper>
        <ProjectImage src={project.image} alt={t(project.title)} />
      </ImageWrapper>
      <ProjectContent>
        <h3>{t(project.title)}</h3>
        <p>{t(project.stack)}</p>
        <ProjectLinks>
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Pages
          </a>
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </ProjectLinks>
        <p>{t(project.description)}</p>
      </ProjectContent>
    </CardContainer>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
export default ProjectCard;
