import React, { useEffect } from 'react';

import { HomeContainer, ScoreBarContainer, NameContainer } from './Home.style';
import ScoreBar from 'components/ScoreBar';

interface Props {
  users: { username: string; level: number }[];
  fetchUsers: () => void;
}

const Home: React.FunctionComponent<Props> = ({ users, fetchUsers }) => {
  useEffect(
    () => {
      fetchUsers();
    },
    [fetchUsers],
  );
  return (
    <HomeContainer>
      {users.map(user => (
        <ScoreBarContainer key={user.username}>
          <NameContainer>{user.username}</NameContainer>
          <ScoreBar level={user.level} />
        </ScoreBarContainer>
      ))}
    </HomeContainer>
  );
};

export default Home;
