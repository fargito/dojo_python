import * as React from 'react';
import { HomeContainer, ScoreBarContainer, NameContainer } from './Home.style';
import ScoreBar from 'components/ScoreBar';

interface Props {
  users: { username: string; score: number }[];
}

const Home: React.FunctionComponent<Props> = ({ users }) => (
  <HomeContainer>
    {users.map(user => (
      <ScoreBarContainer>
        <NameContainer>{user.username}</NameContainer>
        <ScoreBar score={user.score} />
      </ScoreBarContainer>
    ))}
  </HomeContainer>
);

export default Home;
