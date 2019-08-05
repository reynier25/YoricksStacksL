import React from 'react';
import { Link } from 'react-router-dom';

class AnswerIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAnswers();
    }


    render() {
        const { answers } = this.props;
        debugger;
        return (
            <header className="all-answers">
                {/* <p className="new-question-btn"><Link to={`/newquestion`}>ASK QUESTION</Link></p> */}
                <h2>Answers</h2>
                    {/* <p className="new-question-btn"><Link to={`/newquestion`}>ASK QUESTION</Link></p> */}
                    <div>
                    {
                        answers.map(answer => (
                            // <QuestionItem
                            //     key={`${question.id}`}
                            //     question={question} />
                            
                            <div key={`${answer.id}`} answer={answer}>
                                <br />
                                <br/>
                                {answer.body}
                                
                                <div>
                                    <br/>
                                    answered by: {answer.username}
                                </div>
                            </div>
                            
                        )
                        )
                    }
                </div>
                {/* <p className="new-question-btn"><Link to={`/newquestion`}>ASK QUESTION</Link></p> */}
                {/* <button>Ask Question</button> */}


                {/* <div className="hot-questions">HOT NETWORK QUESTIONS GO HERE</div> */}
            </header>
        )
    }

}


export default AnswerIndex