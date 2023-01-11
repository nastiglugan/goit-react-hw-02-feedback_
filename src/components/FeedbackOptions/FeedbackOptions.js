import PropTypes from 'prop-types';
import { Btn } from '../FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [goodFeedback, neutralFeedback, badFeedback] = options;
  return (
    <div>
      <Btn onClick={() => onLeaveFeedback(goodFeedback)}>Good</Btn>
      <Btn onClick={() => onLeaveFeedback(neutralFeedback)}>Neutral</Btn>
      <button onClick={() => onLeaveFeedback(badFeedback)}>Bad</button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
