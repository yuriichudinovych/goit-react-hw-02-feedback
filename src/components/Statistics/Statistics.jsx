import React from 'react';

const Statistics = ({ good, neutral, bad, totalFeedback, positivePercentage }) => (
  <ul>
    <li>
      <p>good: {good}</p>
    </li>
    <li>
      <p>neutral:{neutral}</p>
    </li>
    <li>
      <p>bad: {bad} </p>
    </li>
    <li>
      <p>total: {totalFeedback} </p>
    </li>
    <li>
      <p>positive feedback: {positivePercentage}% </p>
    </li>
  </ul>
);

export default Statistics;
