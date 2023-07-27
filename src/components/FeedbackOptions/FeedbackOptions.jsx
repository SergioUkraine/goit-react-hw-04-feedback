import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './FeedbackOptions.scss';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  keys = () => {
    return this.props.options.map(() => nanoid());
  };

  render() {
    return (
      <div className="feedback">
        {this.props.options.map((option, index) => (
          <button
            key={this.keys()[index]}
            name={option}
            className="feedback__button"
            type="button"
            onClick={this.props.onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
