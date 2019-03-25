import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SigninFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Link, Route } from 'react-router-dom';

const App = () => (
    <div>
        <h1><Link to="/">Bench BnB</Link></h1>
        <GreetingContainer/>
        <Route path={'/login'} component={SigninFormContainer}/>
        <Route path={'/signup'} component={SignupFormContainer}/>
    </div>
);

export default App;