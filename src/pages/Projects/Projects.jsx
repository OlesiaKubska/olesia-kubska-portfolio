import { useRef } from "react";
import { ProjectsContainer, ToggleButtons } from "./Projects.styled";
import { useTranslation } from "react-i18next";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import {
  teamProjects,
  personalProjects,
  commercialProjects,
} from "../../data/projectsData";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";

const Projects = () => {
  const { t } = useTranslation();
  const teamRef = useRef(null);
  const personalRef = useRef(null);
  const commercialRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ProjectsContainer
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <ToggleButtons>
        <PrimaryButton onClick={() => scrollTo(teamRef)}>
          {t("buttons.team")}
        </PrimaryButton>
        <SecondaryButton onClick={() => scrollTo(commercialRef)}>
          {t("buttons.commercial")}
        </SecondaryButton>
        <PrimaryButton onClick={() => scrollTo(personalRef)}>
          {t("buttons.personal")}
        </PrimaryButton>
      </ToggleButtons>

      <section ref={teamRef} id="team">
        <h2>{t("projects.teamTitle")}</h2>
        {teamProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <section ref={commercialRef} id="commercial">
        <h2>{t("projects.commercialTitle")}</h2>
        {commercialProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <section ref={personalRef} id="personal">
        <h2>{t("projects.personalTitle")}</h2>
        {personalProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </ProjectsContainer>
  );
};

export default Projects;
