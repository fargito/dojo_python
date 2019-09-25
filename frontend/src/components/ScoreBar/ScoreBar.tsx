import * as React from 'react';
import { Container, Point, Bar } from './ScoreBar.style';

interface Props {
  level: number;
  levelCount?: number;
}

const ScoreBar: React.FunctionComponent<Props> = ({ levelCount = 7, level }) => {
  const levels = Array.from(Array(levelCount - 1).keys()).slice(1);
  return (
    <Container>
      <Point isActive={level === 0} />
      <Bar isActive={level === 0} />
      {levels.map(levelNumber => (
        <>
          <Bar isActive={level === levelNumber} />
          <Point isActive={level === levelNumber} />
          <Bar isActive={level === levelNumber} />
        </>
      ))}
      <Bar isActive={level === levelCount} />
      <Point isActive={level === levelCount} />
    </Container>
  );
};

export default ScoreBar;
