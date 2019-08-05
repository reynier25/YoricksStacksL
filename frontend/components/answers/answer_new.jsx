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
            // .then(() => this.props.history.push('/'))
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
        return (
            <div className="new-answer">
                <h2>Submit new answer.</h2>
                <form>
                    {/* <textarea cols="30" rows="10" value={this.state.title} onChange={this.handleInput('title')}></textarea> */}
                    <br />
                    <label>Body
                        <br />
                        {/* <input type="text" value={this.state.body} onChange={this.handleInput('body')} /> */}
                        <textarea cols="100" rows="20" value={this.state.body} onChange={this.handleInput('body')}></textarea>


                    </label>
                    <br />
                    <br />
                    <button onClick={this.handleSubmit}>Submit Answer</button>
                </form>

            </div>
        );
    }

};

export default AnswerNew;