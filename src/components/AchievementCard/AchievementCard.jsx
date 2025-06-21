import PropTypes from "prop-types";
import {
  CardImage,
  Card,
  CardContent,
  Title,
  Description,
  School,
} from "./AchievementCard.styled";

const AchievementCard = ({ image, title, description, school }) => {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardContent>
        <Title>{title}</Title>
        <Description>
          {Array.isArray(description) ? (
            description.map((line, idx) => <p key={idx}>{line}</p>)
          ) : (
            <p>{description}</p>
          )}
        </Description>
        {school && <School>{school}</School>}
      </CardContent>
    </Card>
  );
};

AchievementCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  school: PropTypes.string,
};

export default AchievementCard;
