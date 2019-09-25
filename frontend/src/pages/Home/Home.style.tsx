import styled from 'styled-components';
import { getSpacing } from 'stylesheet';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
HomeContainer.displayName = 'HomeContainer';

export const ScoreBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const NameContainer = styled.div`
  width: 150px;
  margin-right: 10px;
`;
