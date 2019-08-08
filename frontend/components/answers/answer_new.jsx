import React from 'react';

class AnswerNew extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            body: '',
            author_id: this.props.author_id.id,
            question_id: this.props.questionId
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
        this.props.postAnswer(this.state)
            .then(() => this.setState({body: ''}))
        // props.history.push('/')
    }

    // renderErrors() {
    //     return (
    //         <div>
    //             <ul>
    //                 {this.props.errors.map((error, index) => (
    //                     <li key={`${index}`}>
    //                         {error}
    //                     </li>
    //                 )
    //                 )
    //                 }
    //             </ul>
    //         </div>
    //     );
    // }

    render() {

        // if (this.state.session.currentUser === null) return null;

        return (
            <div className="new-answer">
                <p>Your Answer</p>
                <form>
                    {/* <textarea cols="30" rows="10" value={this.state.title} onChange={this.handleInput('title')}></textarea> */}
                    
                    <label>
                        
                        {/* <input type="text" value={this.state.body} onChange={this.handleInput('body')} /> */}
                        <textarea cols="100" rows="20" value={this.state.body} onChange={this.handleInput('body')}></textarea>


                    </label>
                    <br />
                    <br />
                    <button onClick={this.handleSubmit}>Post Your Answer</button>
                </form>

            </div>
        );
    }

};

export default AnswerNew;