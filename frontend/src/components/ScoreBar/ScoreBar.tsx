import * as React from 'react';
import { Container, Point, Bar } from './ScoreBar.style';

interface Props {
  score: number;
  levelCount?: number;
}

const ScoreBar: React.FunctionComponent<Props> = ({ levelCount = 7, score }) => {
  const levels = Array.from(Array(levelCount - 1).keys()).slice(1);
  return (
    <Container>
      <Point isActive={score === 0} />
      <Bar isActive={score === 0} />
      {levels.map(levelNumber => (
        <>
          <Bar isActive={score === levelNumber} />
          <Point isActive={score === levelNumber} />
          <Bar isActive={score === levelNumber} />
        </>
      ))}
      <Bar isActive={score === levelCount} />
      <Point isActive={score === levelCount} />
    </Container>
  );
};

export default ScoreBar;
