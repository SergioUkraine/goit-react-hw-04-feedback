import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import './App.scss';

const controls = ['good', 'neutral', 'bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnClick = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positiveRate = Math.trunc((good / this.countTotalFeedback()) * 100);
    return positiveRate;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            controls={controls}
            onLeaveFeedback={this.handleOnClick}
          />
        </Section>
        <Section title="Statistics" customClassName="container--section">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
