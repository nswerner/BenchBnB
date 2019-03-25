import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
        this.setState({username: "", password: ""});
        this.props.history.push('/');
    }

    render() {
        return(
            <>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <br/>
                        <input type="text" value={this.state.username} onChange={this.handleChange('username')}/>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <br/>
                        <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                    </label>
                    <br/>
                    <input type="submit" value={this.props.formType}/>
                </form>
            </>
        )
    }

}

export default SessionForm;