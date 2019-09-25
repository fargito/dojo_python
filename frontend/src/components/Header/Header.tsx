import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link as RouterLink, RouteComponentProps, withRouter } from 'react-router-dom';
import logo from 'assets/forge_logo.png';
import Link from 'components/Link';
import { PATHS } from 'routes';
import { Logo, HeaderContainer } from './Header.style';

interface IHeaderProps {}

const Header: React.FunctionComponent<RouteComponentProps & IHeaderProps> = () => (
  <HeaderContainer>Tableau des scores</HeaderContainer>
);

export default withRouter(Header);
