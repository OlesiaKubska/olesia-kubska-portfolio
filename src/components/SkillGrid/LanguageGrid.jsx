import { useTranslation } from "react-i18next";
import { Grid, SkillCard } from "./SkillGrid.styled";

const flags = {
  ukrainian: "🇺🇦",
  russian: "🇷🇺",
  english: "🇬🇧",
  polish: "🇵🇱",
};

const LanguageGrid = () => {
  const { t } = useTranslation();
  const languages = t("languagesList", { returnObjects: true });

  return (
    <Grid>
      {Object.entries(languages).map(([key, value]) => (
        <SkillCard
          key={key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: key * 0.05 }}
          viewport={{ once: true }}
        >
          <span style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}>
            {flags[key]}
          </span>
          {value}
        </SkillCard>
      ))}
    </Grid>
  );
};

export default LanguageGrid;
