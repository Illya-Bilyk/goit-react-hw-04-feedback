import { useState } from 'react';
import { Box } from './Box';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [options] = useState(['good', 'neutral', 'bad']);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        console.log('Error');
    }
  };
  const total = good + neutral + bad;
  const countPositiveFeedbackPercentage = () => {
    // const total = good + neutral + bad;
    const positiveFeedback = (good / total) * 100;
    return positiveFeedback;
  };

  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Box as="main">
        <Section title="Statistics">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        {total > 0 ? (
          <Section title="Please leave feedback">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage(total)}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Box>
    </div>
  );
}
