import * as React from 'react';
import { HomeContainer, ScoreBarContainer, NameContainer } from './Home.style';
import ScoreBar from 'components/ScoreBar';

interface Props {
  users: { username: string; level: number }[];
}

const Home: React.FunctionComponent<Props> = ({ users }) => (
  <HomeContainer>
    {users.map(user => (
      <ScoreBarContainer>
        <NameContainer>{user.username}</NameContainer>
        <ScoreBar level={user.level} />
      </ScoreBarContainer>
    ))}
  </HomeContainer>
);

export default Home;
