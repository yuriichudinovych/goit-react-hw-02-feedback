import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onleaveFeedback = FeedbackValue => {
    this.setState(prevState => {
      const value = prevState[FeedbackValue];
      return {
        [FeedbackValue]: value + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const totalFeedback = this.countTotalFeedback();
    if (!totalFeedback) {
      return 0;
    }
    const { good } = this.state;
    const result = (good / totalFeedback) * 100;
    return Number(result.toFixed(2));
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions leaveFeedback={this.onleaveFeedback} />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              positivePercentage={positivePercentage}
              totalFeedback={totalFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
