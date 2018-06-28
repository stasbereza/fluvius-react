import React from 'react';

import './styles.css';

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const WeekDay = () => (
  <ul className="Calendar__week-day-name">
    {weekDays.map(weekDay => (
      <li key={weekDay} className="Calendar__day-name">
        {weekDay}
      </li>
    ))}
  </ul>
);

export default WeekDay;
