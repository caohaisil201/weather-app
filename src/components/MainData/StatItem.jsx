import React from 'react';

const StatItem = ({name, icon, value, slideStyle}) => {

  return (
    <div className={`in-day-stat ${slideStyle}`}>
      <h2>{name}</h2>
      {React.createElement(icon, {className: 'icon'})}
      <p>{value}</p>
    </div>
  );
};

export default StatItem;
