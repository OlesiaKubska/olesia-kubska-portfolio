import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import AchievementCard from "../AchievementCard/AchievementCard";
import { EducationContainer, Title } from "./Education.styled";
import { useTranslation } from "react-i18next";

import jsImg from "../../assets/images/achievement/jsImg.jpg";
import goitImg from "../../assets/images/achievement/goitImg.jpg";
import managementImg from "../../assets/images/achievement/managementImg.jpg";
import musicImg from "../../assets/images/achievement/musicImg.jpg";

const Education = () => {
  const { t } = useTranslation();
  const educationItems = t("education.items", { returnObjects: true });

  const images = [jsImg, goitImg, managementImg, musicImg];

  const combinedItems = educationItems.map((item, index) => ({
    ...item,
    image: images[index],
  }));

  return (
    <EducationContainer>
      <Title>{t("education.title")}</Title>
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
        {combinedItems.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
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
    </EducationContainer>
  );
};

export default Education;
