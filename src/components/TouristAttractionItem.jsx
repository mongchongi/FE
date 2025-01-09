import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const TouristAttractionItem = ({ touristAttraction }) => {
  const location = touristAttraction.address.slice(6, 9);

  return (
    <Card>
      <CardBadge>{touristAttraction.name}</CardBadge>
      <CardImage src={touristAttraction.image} alt='...' />
      <CardLocation>
        <FontAwesomeIcon icon={faLocationDot} size='lg' />
        <span>{location}</span>
      </CardLocation>
    </Card>
  );
};

export default TouristAttractionItem;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  width: 240px;
  position: relative;
`;

const CardBadge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #00000050;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 180px;
  border-radius: 8px;
`;

const CardLocation = styled.div`
  margin-top: 20px;

  & span {
    margin-left: 10px;
  }
`;
