import { AvatarAction, AvatarState } from './Avatar';
import { LoginAction, LoginState } from './Login';
import { UsersAction, UsersState } from './Users';

export type RootState = Readonly<{
  avatar: AvatarState;
  login: LoginState;
  users: UsersState;
}>;
export type RootAction = AvatarAction | LoginAction | UsersAction;
