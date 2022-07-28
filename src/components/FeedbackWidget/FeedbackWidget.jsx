import React from 'react';
import Buttons from './Buttons';
import FeedbackSection from './FeedbackSection';
import Statistic from './StatisticList';
import Notifacation from './Notifacation';

class FeedbackWidget extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  tipGoodFeedback = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
    this.countTotalFeedback();
  };

  tipNeutralFeedback = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  tipBadFeedback = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100);

  };

  render() {
    const {good, neutral, bad} = this.state;

    return (
      <>
      <FeedbackSection title="Please leave feedback">
        <Buttons
          tipGoodFeedback={this.tipGoodFeedback}
          tipBadFeedback={this.tipBadFeedback}
          tipNeutralFeedback={this.tipNeutralFeedback}
        />
      </FeedbackSection>
        { this.countTotalFeedback() > 0 ?
          <FeedbackSection title="Statistics">
            <Statistic
              countBadFeedback={bad}
              countTotalFeedback={this.countTotalFeedback}
              countNeutralFeedback={neutral}
              countGoodFeedback={good}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
            />
          </FeedbackSection> :
          <Notifacation message="There is no feedback"/>
        }
      </>
    );
  }
}

export default FeedbackWidget;
