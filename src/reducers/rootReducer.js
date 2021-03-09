import {combineReducers} from 'redux';
import { applicationReducers} from './applicationReducer';

const rootReducer = combineReducers({
    task: applicationReducers
})

export default rootReducer