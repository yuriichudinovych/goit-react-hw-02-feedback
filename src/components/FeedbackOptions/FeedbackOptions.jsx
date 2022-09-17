import React from 'react';

import { FeedbackBtnList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ leaveFeedback }) => (
  <FeedbackBtnList>
    <li>
      <button onClick={() => leaveFeedback('good')}>good</button>
    </li>
    <li>
      <button onClick={() => leaveFeedback('neutral')}>neutral</button>
    </li>
    <li>
      <button onClick={() => leaveFeedback('bad')}>Bad</button>
    </li>
  </FeedbackBtnList>
);

export default FeedbackOptions;
