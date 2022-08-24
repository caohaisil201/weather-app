import React from 'react';
import MiniThumbnail from '../../assets/images/miniThumbnail.png';

const ForecastItem = (props) => {
  function getTime() {
    return props.time.slice(11, 16);
  }

  return (
    <div className="forecast">
      <span>{getTime()}</span>
      <div className="forecast-icon">
        <img src={props.icon || MiniThumbnail} alt="icon" />
      </div>
      <h4>{props.temp} &#8451;</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default ForecastItem;
