import { ActionType, getType } from 'typesafe-actions';

import { AnyAction } from 'redux';
import { fetchUsers } from './actions';
import { UsersType } from './types';

export type UsersAction = ActionType<typeof fetchUsers.success>;

export type UsersState = Readonly<UsersType>;

const initialState: UsersState = [];

const reducer = (state: UsersState = initialState, action: AnyAction) => {
  const typedAction = action as UsersAction;

  switch (typedAction.type) {
    case getType(fetchUsers.success):
      return typedAction.payload.users;
    default:
      return state;
  }
};

export default reducer;
