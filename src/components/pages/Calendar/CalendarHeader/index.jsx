import React from 'react';
import HeaderData from '../HeaderData';
import BtnAddEvent from '../BtnAddEvent';

import './styles.css';

const Transparent = () => <div className="Calendar__transparent" />;

const CalendarHeader = () => (
  <div className="Calendar__header">
    <Transparent />
    <HeaderData />
    <BtnAddEvent />
  </div>
);

export default CalendarHeader;
