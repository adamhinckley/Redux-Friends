import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  UPDATE,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
  ADD,
  ADD_SUCCESS,
  ADD_FAILURE
} from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  updatingFriend: false,
  friends: [],
  error: null
  // friendsSaved: false,
  // savingFriends: false,
  // friendUpdated: false,
  // deletingFriend: false,
  // friendDeleted: false,
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return { ...state, fetchingFriends: true };
    case FETCH_SUCCESS:
      console.log(state, action);
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: true,
        friends: [...state.friends, ...action.payload]
      };
    case FETCH_FAILURE:
      return { ...state, fetchingFriends: false, error: action.payload };
    case ADD:
      return { ...state, updatingFriend: true };
    case ADD_SUCCESS:
      return {
        ...state,
        updatingFriend: false,
        friends: [...state.friends, ...action.payload]
      };
    case ADD_FAILURE:
      return { ...state, updatingFriend: false, error: action.payload };
    case UPDATE:
      return {
        ...state,
        updatingFriend: true
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        updatingFriend: false,
        friends: [...state.friends, ...action.payload]
      };
    case UPDATE_FAILURE:
      return { ...state, updatingFriend: false, error: action.payload };

    default:
      return state;
  }
};
