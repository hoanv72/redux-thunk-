import { getTaskListApi } from "../core/api/taskApi";
import { GET_TASK_SUCCESS, GET_TASK_FAILED } from "./constant";

export const getTaskSuccess = (task) => ({
  type: GET_TASK_SUCCESS,
  payload: {
    task,
  },
});

export const getTaskFailed = (error) => ({
  type: GET_TASK_FAILED,
  payload: {
    error,
  },
});

export const getTask = () => {
  return (dispatch, getState) => {
    getTaskListApi()
      .then((task) => {
        dispatch(getTaskSuccess(task));
      })
      .catch((error) => dispatch(getTaskFailed(error)));
  };
};
