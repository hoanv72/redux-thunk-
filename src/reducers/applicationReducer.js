import ActionTypes from '../actions/actionTypes';

const initial_state = { task: [] };
export function applicationReducers(state = initial_state, action) {
  switch (action.type) {
    case ActionTypes.LoadInitialState : {
      return state;
    }
    default:
      return state;
  }
}