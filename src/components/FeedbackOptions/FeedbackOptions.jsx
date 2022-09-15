import React from 'react';

const FeedbackOptions = ({ leaveFeedback }) => (
  <ul>
    <li>
      <button onClick={() => leaveFeedback('good')}>good</button>
    </li>
    <li>
      <button onClick={() => leaveFeedback('neutral')}>neutral</button>
    </li>
    <li>
      <button onClick={() => leaveFeedback('bad')}>Bad</button>
    </li>
  </ul>
);

export default FeedbackOptions;
