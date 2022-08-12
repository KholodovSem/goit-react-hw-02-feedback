import React from 'react';
import Button from './Button';
import FeedbackSection from './FeedbackSection';
import Statistic from './StatisticList';
import Notifacation from './Notifacation';

class FeedbackWidget extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  tipFeedback = (name) => {
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100);

  };

  render() {
    const {good, neutral, bad} = this.state;
    const nameButtons = Object.keys(this.state);

    return (
      <>
      <FeedbackSection title="Please leave feedback">
        <div>
        {nameButtons.map((button) => (
          <Button name={button} key={button} onTip={this.tipFeedback}/>
        ))}
        </div>
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
