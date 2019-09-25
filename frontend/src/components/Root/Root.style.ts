import styled from 'styled-components';
import { borderRadius, colorUsage, getSpacing } from 'stylesheet';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 ${getSpacing(10)};
`;
RootContainer.displayName = 'RootContainer';
