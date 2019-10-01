import * as React from 'react';
import { Container, Point, Bar, Level, FirstPoint, LastPoint } from './ScoreBar.style';

interface Props {
  level: number;
  levelCount?: number;
}

const ScoreBar: React.FunctionComponent<Props> = ({ levelCount = 6, level }) => {
  const levels = Array.from(Array(levelCount).keys()).slice(1);
  console.log(levels);
  return (
    <Container>
      <FirstPoint isActive={level === 0}>
        <Level isActive={level === 0}>0</Level>
      </FirstPoint>
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
      <LastPoint isActive={level === levelCount}>
        <Level isActive={level === levelCount}>{levelCount}</Level>
      </LastPoint>
    </Container>
  );
};

export default ScoreBar;
