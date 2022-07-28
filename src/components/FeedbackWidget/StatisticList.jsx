import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const StatisticList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0;
  margin-top: 0;
  margin-bottom: 0;

  list-style: none;
`;

const Item = styled.li`
  width: 100%;

  font-weight: 500;
  &:not(:last-child){
    margin-bottom: 10px;
  }
`

const Statistic = ({countGoodFeedback, countNeutralFeedback, countBadFeedback, countTotalFeedback, countPositiveFeedbackPercentage}) => (
  <StatisticList>
    <Item>Good: {countGoodFeedback}</Item>
    <Item>Neutral: {countNeutralFeedback}</Item>
    <Item>Bad: {countBadFeedback}</Item>
    <Item>Total: {countTotalFeedback()}</Item>
    <Item>Positive
      feedback: {countPositiveFeedbackPercentage() ? countPositiveFeedbackPercentage() : 0}%
    </Item>
  </StatisticList>
)

Statistic.propTypes = {
  countBadFeedback: PropTypes.number.isRequired,
  countGoodFeedback: PropTypes.number.isRequired,
  countNeutralFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  countTotalFeedback: PropTypes.func.isRequired
}

export default Statistic;
