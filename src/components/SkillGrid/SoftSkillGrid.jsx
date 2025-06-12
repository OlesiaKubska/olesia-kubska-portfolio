import { Grid, SkillCard } from "./SkillGrid.styled";

const softSkills = [
  { name: "Communication", icon: "🗣️" },
  { name: "Teamwork", icon: "🤝" },
  { name: "Creativity", icon: "🎨" },
  { name: "Decision-making", icon: "🧠" },
  { name: "Time Management", icon: "⏱️" },
];

const SoftSkillGrid = () => (
  <Grid>
    {softSkills.map((skill, i) => (
      <SkillCard
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.05 }}
        viewport={{ once: true }}
      >
        <span style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}>
          {skill.icon}
        </span>
        {skill.name}
      </SkillCard>
    ))}
  </Grid>
);

export default SoftSkillGrid;
