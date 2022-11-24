import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, reserveRocket } from '../Redux/rockets/rockets';
import './rockets.css';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;
  return (
    <div className="each">
      <div className="pictFrame">
        <img
          src={rocket.flickr_images}
          alt={rocket.rocket_name}
          className="pict"
        />
      </div>
      <div className="infor">
        <h2 className="text-3xl">{rocket.rocket_name}</h2>
        <p>
          {rocket.reserved && <span className="reservRock">Reserved</span>}
          {rocket.description}
        </p>
        <Button
          variant={rocket.reserved ? 'outline-primary' : 'primary'}
          type="button"
          className="rocketBtn p-4 bg-primary opacity-50"
          onClick={() => dispatch(reserveRocket(rocket.rocket_id))}
        >
          {rocket.reserved ? 'Cancel reservation' : 'Reserve Rockets'}
        </Button>
      </div>
    </div>
  );
};
Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_id: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!rocketsData.length) {
      dispatch(getRockets());
    }
  });
  return (
    <div className="Rocketslist">
      {rocketsData.map((rocketData) => (
        <Rocket key={rocketData.id} rocket={rocketData} id={rocketData.id} />
      ))}
    </div>
  );
};

export default Rockets;
