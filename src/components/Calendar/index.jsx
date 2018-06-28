import React, { Component } from 'react';

import CalendarHeader from './CalendarHeader';
import WeekDay from './WeekDay';
import Month from './Month';

import './styles.css';

class Calendar extends Component {
  state = {
      date: 1,
  };

  render() {
    return (
      <div className="Calendar">
        <CalendarHeader />
        <WeekDay />
        <Month />
      </div>
    );
  }
}

export default Calendar;
