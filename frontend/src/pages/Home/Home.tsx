import * as React from 'react';
import { HomeContainer } from './Home.style';
import ScoreBar from 'components/ScoreBar';

const Home: React.FunctionComponent = () => (
  <HomeContainer>
    <ScoreBar />
  </HomeContainer>
);

export default Home;
