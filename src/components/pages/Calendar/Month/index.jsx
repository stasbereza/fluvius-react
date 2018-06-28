import React, { Component } from 'react';

import Dates from '../Dates';

export default class Month extends Component {
  render () {
      return (
        <div className="Calendar__month">
          <Dates />
        </div>
      )
  }
}
