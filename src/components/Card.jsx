import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 320px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  margin: 0;
  margin-bottom: 12px;
  font-size: 20px;
  color: #000;
`;

const CardDescription = styled.p`
  margin: 0;
  font-size: 15px;
  color: #444;
  line-height: 1.5;
`;

const Card = ({ image, title, description }) => {
  return (
    <CardContainer>
      <CardImageWrapper>
        <CardImage src={image} alt={title} />
      </CardImageWrapper>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
