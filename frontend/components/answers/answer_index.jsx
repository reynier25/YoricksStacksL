import React from 'react';
import { Link } from 'react-router-dom';

class AnswerIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAnswers(this.props.questionId);
        this.initialAnswers = this.props.answers
    }

    // componentDidUpdate() {
    //     if (this.props.answers !== this.initialAnswers) {
    //         this.props.fetchAnswers(this.props.questionId);
    //         // this.setState({ answers: this.props.answers });
    //     }
    // }


    render() {
        const { answers } = this.props;
        let answersSingOrPl;
        if (answers.length === 1) {
            answersSingOrPl = 'Answer';
        } else {
            answersSingOrPl = 'Answers'
        }
        // debugger;
        return (
            <header className="all-answers">
                {/* <p className="new-question-btn"><Link to={`/newquestion`}>ASK QUESTION</Link></p> */}
                <h2 className="number-answers">{answers.length} {answersSingOrPl}</h2>
                    {/* <p className="new-question-btn"><Link to={`/newquestion`}>ASK QUESTION</Link></p> */}
                    <div>
                    {
                        answers.map(answer => (
                            // <QuestionItem
                            //     key={`${question.id}`}
                            //     question={question} />
                            
                            <div className="single-answer" key={`${answer.id}`} answer={answer}>
                                <br />
                                {/* <br/> */}
                                {answer.body}
                                
                                <div className="answered-by">
                                    <br/>
                                    answered by: {answer.username}
                                </div>
                                <br/>
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