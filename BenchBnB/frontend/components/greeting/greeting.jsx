import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);

    }

    signoutButton() {
        this.props.signout(this.props.currentUser.id);
    }

    render() {
        let section;
        if (this.props.currentUser.id) {
            section = (
                <>
                    <h2>Welcome {this.props.currentUser.username}</h2>
                    <button onClick={() => this.signoutButton() }>Signout</button>
                </>    
            );
        } else {
            section = (
                <>
                    <Link to='/login'>Sign In</Link>
                    <br/>
                    <Link to='/signup'>Sign Up</Link>
                </>
            );
        }


        return ( 

            <>
                {section}
            </>
        )
    }
}

export default Greeting;