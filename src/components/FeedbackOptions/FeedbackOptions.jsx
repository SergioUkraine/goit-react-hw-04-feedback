import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './FeedbackOptions.scss';

class FeedbackOptions extends Component {
  keys = () => {
    return this.props.controls.map(() => nanoid());
  };

  render() {
    return (
      <div className="feedback">
        {this.props.controls.map((control, index) => (
          <button
            key={this.keys()[index]}
            name={control}
            className="feedback__button"
            type="button"
            onClick={this.props.onLeaveFeedback}
          >
            {control}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
