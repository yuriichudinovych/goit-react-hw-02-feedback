import React from 'react';
import { StatisticItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, totalFeedback, positivePercentage }) => (
  <ul>
    <StatisticItem>
      <p>good: {good}</p>
    </StatisticItem>
    <StatisticItem>
      <p>neutral:{neutral}</p>
    </StatisticItem>
    <StatisticItem>
      <p>bad: {bad} </p>
    </StatisticItem>
    <StatisticItem>
      <p>total: {totalFeedback} </p>
    </StatisticItem>
    <StatisticItem>
      <p>positive feedback: {positivePercentage}% </p>
    </StatisticItem>
  </ul>
);

export default Statistics;
