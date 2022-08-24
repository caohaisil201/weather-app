import React from 'react';

const StatItem = ({name, icon, value}) => {

  return (
    <div className="in-day-stat">
      <h2>{name}</h2>
      {React.createElement(icon, {className: 'icon'})}
      <p>{value}</p>
    </div>
  );
};

export default StatItem;
