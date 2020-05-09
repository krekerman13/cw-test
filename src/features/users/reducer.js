import { USERS_FETCHING_SUCCESS, FETCH_USERS, USERS_FETCHING_FAILED } from './types';

const initialState = {
  isFetching: false,
  users: null,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS:
      return { ...state, isFetching: true };
    case USERS_FETCHING_SUCCESS:
      return { ...state, isFetching: false, users: payload, error: null };
    case USERS_FETCHING_FAILED:
      return { ...state, isFetching: false, error: payload };
    default:
      return state;
  }
};
