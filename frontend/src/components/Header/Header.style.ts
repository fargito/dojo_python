import styled from 'styled-components';
import { fontSize, getSpacing } from 'stylesheet';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${getSpacing(13)};
  padding: 0 ${getSpacing(4)};
  margin-bottom: ${getSpacing(4)};
  font-size: ${fontSize.large};
`;

HeaderContainer.displayName = 'HeaderContainer';

export const Logo = styled.img`
  height: ${getSpacing(9)};
`;

Logo.displayName = 'Logo';
