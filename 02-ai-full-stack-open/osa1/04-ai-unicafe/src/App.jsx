import { useState } from "react";

import "./App.css";

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <p className="statisticline">
        <span className="text"> {text}</span>
        <span className="value">{value}</span>
      </p>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / all;
  const positive = all === 0 ? 0 : (good / all) * 100;

  return (
    <>
      <h2>Statistics</h2>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={`${positive} %`} />
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <section>
        <h1>Give Feedback</h1>
        <Button onClick={handleGoodClick}>good</Button>
        <Button onClick={handleNeutralClick}>neutral</Button>
        <Button onClick={handleBadClick}>bad</Button>
      </section>
      <section>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </section>
    </>
  );
};

export default App;
