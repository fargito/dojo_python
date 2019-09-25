import styled from 'styled-components';
import {
  borderRadius,
  colorUsage,
  fontFamily,
  fontSize,
  fontWeight,
  getSpacing,
  lineHeight,
} from 'stylesheet';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${getSpacing(10)};
`;
HomeContainer.displayName = 'HomeContainer';

export const ScoreBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const NameContainer = styled.div`
  width: 100px;
  margin-right: 10px;
`;
