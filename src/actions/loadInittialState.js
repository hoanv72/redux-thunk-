import actionTypes from './actionTypes';

export function loadInitialState() {
    return dispatch => {
        dispatch(loadInitialState)
    }
}

export function loadInitialStateAction() {
    return {
        type: actionTypes.loadInitialState
    }
}