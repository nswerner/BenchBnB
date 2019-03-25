import * as ApiSessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

// normal action creators

const receiveCurrentUser = (user) => {
    return({
        type: RECEIVE_CURRENT_USER,
        user
    });
};

const logoutCurrentUser = ({id}) => {
    return ({
        type: LOGOUT_CURRENT_USER,
        id
    });
};

const receiveErrors = (errors) => {
    
    return({
        type: RECEIVE_ERRORS,
        errors
    });
};


// thunk action creators

export const signup = (user) => (dispatch) => {
    return ApiSessionUtil.signup(user).then( user => dispatch(receiveCurrentUser(user)), response => dispatch(receiveErrors(response.error)));
};

export const signin = (user) => (dispatch) => {
    return ApiSessionUtil.signin(user).then(user => dispatch(receiveCurrentUser(user)), response => dispatch(receiveErrors(response.error)));
};

export const signout = (id) => (dispatch) => {
    return ApiSessionUtil.signout(id).then(user => dispatch(logoutCurrentUser(user)), response => dispatch(receiveErrors(response.error)));
};

