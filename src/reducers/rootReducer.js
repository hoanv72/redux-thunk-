import { GET_TASK_SUCCESS, GET_TASK_FAILED } from "../actions/constant";

const initialState = {
  loading: false,
  error: null,
  task: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_SUCCESS:
      return {
        loading: false,
        error: null,
        task: action.payload.task,
      };
    case GET_TASK_FAILED:
      return {
        loading: false,
        error: action.payload.error,
        task: null,
      };
    default:
      return state;
  }
};
export default rootReducer;
