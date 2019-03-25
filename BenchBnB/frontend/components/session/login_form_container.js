import React from 'react';
import { connect } from 'react-redux';
import { signin} from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const msp = state => {

    return({
        formType: "Sign In"
    });
};

const mdp = dispatch => {

    return ({
        action: (user) => dispatch(signin(user))
    });
};

export default withRouter(connect(msp, mdp)(SessionForm));