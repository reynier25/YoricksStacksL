import React from 'react';

class Signup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
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
        this.props.createNewUser(this.state)
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
        let passwordField;
        // debugger;
        if (this.props.errors.length === 0) {
            passwordField = <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
        } else {
            passwordField = <input className="error" type="password" value={this.state.password} onChange={this.handleInput('password')} />
        }

        return (
            <div className="session-form-signup">

                <h2>Create your Yoricks Stacks account. It’s free and only takes a minute.</h2>
                <form>

                    <label>Display name
                        <br />
                        <input type="text" value={this.state.username} onChange={this.handleInput('username')} />

                    </label>

                    <label>Email
                        <br />
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} />

                    </label>

                    <label>Password
                        <br />
                        {passwordField}
                        <p className="errors">{this.renderErrors()}</p>
                    </label>

                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>

            </div>
        );
    }

};

export default Signup;