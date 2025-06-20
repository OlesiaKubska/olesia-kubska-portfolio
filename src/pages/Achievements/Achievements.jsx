import Certifications from "../../components/Certifications/Certifications";
import Education from "../../components/Education/Education";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import { AchievementsPage, SectionTitle } from "./Achievements.styled";

const Achievements = () => {
  return (
    <AchievementsPage>
      <SectionTitle>Achievements</SectionTitle>

      <WorkExperience />
      <Education />
      <Certifications />
    </AchievementsPage>
  );
};

export default Achievements;
