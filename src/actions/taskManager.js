import actionTypes from './actionTypes';

export function addTask(){
    return dispatch => {
        dispatch(getAddTaskFulfillAction())
    }
}

function getAddTaskFulfillAction(){
    return {
        type: actionTypes.getAddTaskFulfillAction
    }
}