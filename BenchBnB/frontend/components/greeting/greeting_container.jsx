import React from 'react';
import { connect } from "react-redux"; 
import Greeting from './greeting';
import { signout } from '../../actions/session_actions';


const msp = (state) => {
    const currentUserId = state.session.id;
    return({
        currentUser: state.entities.users[currentUserId] || {}
    });
};

const mdp = (dispatch) => {

    return({
        signout: (id) => dispatch(signout(id))
    });
};

export default connect(msp, mdp)(Greeting);