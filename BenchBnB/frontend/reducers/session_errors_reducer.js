import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import {merge} from 'lodash';


const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = [];
            return newState;
        case RECEIVE_ERRORS:
            newState = action.errors;
            return newState;
        default:
            return oldState;
    }
}; 

export default sessionErrorsReducer;
