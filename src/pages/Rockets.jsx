import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, reserveRocket } from '../Redux/rockets/rockets';
import Button from '../UI/button';


const Rocket = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;
  return (
    <div className="each">
      <div className="infor">
        <h2>{rocket.rocket_name}</h2>
        <p>
          {rocket.reserved && <span className="reservRock">Reserved</span>}
          {rocket.description}
        </p>
        <Button
          variant={rocket.reserved ? 'outline-primary' : 'primary'}
          type="button"
          className="rocketBtn"
          onClick={() => dispatch(reserveRocket(rocket.rocket_id))}
        >
          {rocket.reserved ? 'Cancel reservation' : 'Reserve Rockets'}
        </Button>
      </div>
    </div>
  );
};

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rocketReducer);
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
