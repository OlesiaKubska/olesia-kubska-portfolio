import { FaBrain, FaCode, FaUsers, FaLanguage, FaRocket } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { HighlightCard, HighlightsSection } from "./AboutHighlights.styled";

const AboutHighlights = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: <FaCode size={28} />,
      title: t("aboutHighlights.devSkills"),
      text: t("aboutHighlights.devSkillsText"),
    },
    {
      icon: <MdOutlineDesignServices size={28} />,
      title: t("aboutHighlights.creativity"),
      text: t("aboutHighlights.creativityText"),
    },
    {
      icon: <FaUsers size={28} />,
      title: t("aboutHighlights.teamwork"),
      text: t("aboutHighlights.teamworkText"),
    },
    {
      icon: <FaLanguage size={28} />,
      title: t("aboutHighlights.languages"),
      text: t("aboutHighlights.languagesText"),
    },
    {
      icon: <FaBrain size={28} />,
      title: t("aboutHighlights.learning"),
      text: t("aboutHighlights.learningText"),
    },
    {
      icon: <FaRocket size={28} />,
      title: t("aboutHighlights.goals"),
      text: t("aboutHighlights.goalsText"),
    },
  ];

  return (
    <HighlightsSection>
      {highlights.map((item, index) => (
        <HighlightCard key={index}>
          <h3>
            {item.icon}
            {item.title}
          </h3>
          <p>{item.text}</p>
        </HighlightCard>
      ))}
    </HighlightsSection>
  );
};

export default AboutHighlights;
