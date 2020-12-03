import React from "react";
import LoginForm from "../forms/login";
import {connect} from "react-redux";
import {loginAction} from "../../store/actions/app";

const initState = {
    login: "",
    password: ""
}

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state  = initState;
    }

    loginChangeHandler = e => {
        this.setState({...this.state, login: e.target.value});
    }

    passwordChangeHandler = e => {
        this.setState({...this.state, password: e.target.value});
    }

    onLoginClick = e => {
        e.preventDefault();
        this.props.login(this.state.login, this.state.password)
    };

    render() {
        return (
            <div>
                <LoginForm onLoginChange={this.loginChangeHandler} onPasswordChange={this.passwordChangeHandler} onLogin={this.onLoginClick}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (login, password) => dispatch(loginAction(login, password))
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);