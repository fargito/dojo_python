import styled from 'styled-components';
import { getSpacing } from 'stylesheet';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
HomeContainer.displayName = 'HomeContainer';

export const ScoreBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
  justify-content: space-around;
`;

export const NameContainer = styled.div`
  width: 150px;
  margin-right: 10px;
`;
