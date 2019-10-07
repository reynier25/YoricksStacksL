import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger;
        this.props.login(this.state)
            .then(() => this.props.history.push('/questions'))
    }

    handleDemoLogin(e) {
        e.preventDefault();
        debugger;
        this.props.login({ username: 'Karl Popper', password: '123456' })
        .then(() => this.props.history.push('/questions'))
    }

    renderErrors() {
        return (
            <div>
                <p>
                    {this.props.errors.map((error, index) => (
                        <p key={`${index}`}>
                            {error}
                        </p>
                        )
                    )
                    }
                </p>
            </div>
        );
    }

    render() {
        let usernameField;
        // debugger;
        if (this.props.errors.length === 0) {
            usernameField = <input type="text" value={this.state.username} onChange={this.handleInput('username')} />
        } else {
            usernameField = <input className="error" type="text" value={this.state.username} onChange={this.handleInput('username')} />
        }

        return (
            <div className="session-form-login">
                <img src={window.img} className="mainlogo2" />

                <h2>Log In</h2>
                {/* <div className="errors">{this.renderErrors()}</div> */}
                
                <form>

                    <label>Username
                        <br/>
                        {/* <input type="text" value={this.state.username} onChange={this.handleInput('username')} /> */}
                        {usernameField}
                        <p className="errors">{this.renderErrors()}</p>
                    </label>

                    <label>Password
                        <br/>
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />

                    </label>

                    <button onClick={this.handleSubmit}>Log In</button>
                    <button onClick={this.handleDemoLogin}>Demo Login</button>
                </form>

                {/* <button onClick={this.handleDemoLogin}>Demo Login</button> */}
            </div>
        );
    }

};


export default Login;