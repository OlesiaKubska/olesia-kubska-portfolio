// import Certifications from "../../components/Certifications/Certifications";
import Education from "../../components/Education/Education";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import { AchievementsPage, SectionTitle } from "./Achievements.styled";

const Achievements = () => {
  return (
    <AchievementsPage
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <SectionTitle>Achievements</SectionTitle>
      <WorkExperience />
      <Education />
      {/* <Certifications /> */}
    </AchievementsPage>
  );
};

export default Achievements;
