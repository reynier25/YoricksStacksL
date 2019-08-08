import React from 'react';

class QuestionNew extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            author_id: this.props.author_id.id
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
        this.props.postQuestion(this.state)
            .then(() => this.props.history.push('/questions'))
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
            <div className="new-question">
                <h2>Review your question</h2>
                <div></div>
                <form>
                    {/* <textarea cols="30" rows="10" value={this.state.title} onChange={this.handleInput('title')}></textarea> */}
                    <label>Title
                        <br />
                        {/* <input type="text" value={this.state.title} onChange={this.handleInput('title')} /> */}
                        <input value={this.state.title} onChange={this.handleInput('title')}></input>

                    </label>
<br/>
                    <label>Body
                        <br />
                        {/* <input type="text" value={this.state.body} onChange={this.handleInput('body')} /> */}
                        <textarea cols="102" rows="20" value={this.state.body} onChange={this.handleInput('body')}></textarea>


                    </label>
                    <br />
                    <br/>
                    <button onClick={this.handleSubmit}>Post Your Question</button>
                </form>

            </div>
        );
    }

};

export default QuestionNew;