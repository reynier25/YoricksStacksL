// import React from 'react';

// export default () => {
//     let display = (
//         <textarea cols="100" rows="20">
        
//             NEW QUESTION GOES HERE
//             {/* <Link className="tags-tab" to="/">Sign Up</Link> */}
            
//         </textarea>
//     );

//     // const { match, location, history } = this.props

//     // if (window.location.hash === "#/signup" || window.location.hash === "#/login") {
//     //     display = null;
//     // }

//     return (
//         <header className="new-question">
//             {/* <img src={window.img} className="mainlogo" /> */}
//             {/* <Link className="logo" to="/">YoricksStacks</Link> */}
//             {/* <p className="logo">Yoricks</p> */}
//             {/* <p className="logo2">Stacks</p> */}
//             <span>
//                 {display}
//             </span>
//         </header>
//     )


// }
















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
                <h2>Submit new question.</h2>
                <form>
                    {/* <textarea cols="30" rows="10" value={this.state.title} onChange={this.handleInput('title')}></textarea> */}
                    <label>Title
                        <br />
                        {/* <input type="text" value={this.state.title} onChange={this.handleInput('title')} /> */}
                        <textarea cols="100" rows="3" value={this.state.title} onChange={this.handleInput('title')}></textarea>

                    </label>
<br/>
                    <label>Body
                        <br />
                        {/* <input type="text" value={this.state.body} onChange={this.handleInput('body')} /> */}
                        <textarea cols="100" rows="20" value={this.state.body} onChange={this.handleInput('body')}></textarea>


                    </label>
                    <br />
                    <br/>
                    <button onClick={this.handleSubmit}>Submit Question</button>
                </form>

            </div>
        );
    }

};

export default QuestionNew;