import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './Statistics.scss';

class Statistics extends Component {
  keys = () => {
    return this.props.controls.map(() => nanoid());
  };

  getStats = () => {
    const { good, neutral, bad } = this.props;

    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
    );
  };

  render() {
    return (
      <div className='statistics'>
        {this.getStats()}
        <p>Total: {this.props.total}</p>
        <p>Positive feedback: {this.props.positivePercentage}%</p>
      </div>
    );
  }
}

export default Statistics;
