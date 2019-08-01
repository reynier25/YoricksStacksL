import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/questions'))
<<<<<<< HEAD
=======
    }

    renderErrors() {
        return (
            <div>
                <ul>
                    {this.props.errors.map((error, index) => (
                        <li key={`${index}`}>
                            {error}
                        </li>
                        )
                    )
                    }
                </ul>
            </div>
        );
>>>>>>> a608bfedb6ea4b4e53e9fa2b09afa93c54be53eb
    }

    render() {
        return (
            <div className="session-form">
                <h2>Log In</h2>
                {/* <div className="errors">{this.renderErrors()}</div> */}
                <h2>{this.renderErrors()}</h2>
                
                <form>

                    <label>Username
                        <br/>
                        <input type="text" value={this.state.username} onChange={this.handleInput('username')} />

                    </label>

                    <label>Password
                        <br/>
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />

                    </label>

                    <button onClick={this.handleSubmit}>Log In</button>
                </form>

            </div>
        );
    }

};


export default Login;