import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import { UsersType } from './types';

export const fetchUsers = createAsyncAction(
  'Users/FETCH_USERS_REQUEST',
  'Users/FETCH_USERS_SUCCESS',
  'Users/FETCH_USERS_FAILURE',
)<
  {},
  {
    users: UsersType;
  },
  {
    errorMessage: string;
  }
>();

export default {
  fetchUsers,
};
