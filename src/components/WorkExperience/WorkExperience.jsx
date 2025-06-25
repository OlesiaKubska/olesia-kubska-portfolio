import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import AchievementCard from "../AchievementCard/AchievementCard";
import { ExperienceContainer, Title } from "./WorkExperience.styled";
import teacherImage from "../../assets/images/achievement/teacher.jpg";
import supportImage from "../../assets/images/achievement/teacher-support.jpg";

const WorkExperience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t("experience.taTitle"),
      description: [t("experience.taDetail1"), t("experience.taDetail2")],
      school: t("experience.taSchool"),
      image: supportImage,
    },
    {
      title: t("experience.teacherTitle"),
      description: [
        t("experience.teacherDetail1"),
        t("experience.teacherDetail2"),
        t("experience.teacherDetail3"),
        t("experience.teacherDetail4"),
      ],
      school: t("experience.teacherSchool"),
      image: teacherImage,
    },
  ];

  return (
    <ExperienceContainer>
      <Title>{t("experience.title")}</Title>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {experiences.map((item, index) => (
          <SwiperSlide
            style={{
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
            key={index}
          >
            <AchievementCard
              image={item.image}
              title={item.title}
              description={item.description}
              school={item.school}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ExperienceContainer>
  );
};

export default WorkExperience;
