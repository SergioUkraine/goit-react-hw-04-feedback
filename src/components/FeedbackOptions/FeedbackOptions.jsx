import React from 'react';
import PropTypes from 'prop-types';
import { Feedback, FeedbackButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Feedback>
      {options.map(option => (
        <FeedbackButton
          key={option}
          name={option}
          className="feedback__button"
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </FeedbackButton>
      ))}
    </Feedback>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
