import * as React from 'react';
import { Container, Point, Bar, Level } from './ScoreBar.style';

interface Props {
  level: number;
  levelCount?: number;
}

const ScoreBar: React.FunctionComponent<Props> = ({ levelCount = 6, level }) => {
  const levels = Array.from(Array(levelCount).keys()).slice(1);
  console.log(levels);
  return (
    <Container>
      <Point isActive={level === 0}>
        <Level isActive={level === 0}>0</Level>
      </Point>
      <Bar isActive={level === 0} />
      {levels.map(levelNumber => (
        <>
          <Bar isActive={level === levelNumber} />
          <Point isActive={level === levelNumber}>
            <Level isActive={level === levelNumber}>{levelNumber}</Level>
          </Point>
          <Bar isActive={level === levelNumber} />
        </>
      ))}
      <Bar isActive={level === levelCount} />
      <Point isActive={level === levelCount}>
        <Level isActive={level === levelCount}>{levelCount}</Level>
      </Point>
    </Container>
  );
};

export default ScoreBar;
