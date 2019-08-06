import React from 'react';
import QuestionItem from './question_item';
import {Link} from 'react-router-dom';

class QuestionIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchQuestions();
    }


    render() {
        const { questions } = this.props;
        // debugger;
        return (
            <header className="all-questions">
                {/* <p className="new-question-btn"><Link to={`/newquestion`}>ASK QUESTION</Link></p> */}
                
                <ul>
                    <p className="new-question-btn"><Link to={`/newquestion`}>ASK QUESTION</Link></p>
                    <div className="top-questions">Top Questions</div>

                    {
                        questions.map(question => (
                            <QuestionItem
                                key={`${question.id}`}
                                currentUser={this.props.currentUser}
                                question={question} />
                            )
                        )
                    }
                </ul>
                {/* <p className="new-question-btn"><Link to={`/newquestion`}>ASK QUESTION</Link></p> */}
                {/* <button>Ask Question</button> */}


                {/* <div className="hot-questions">HOT NETWORK QUESTIONS GO HERE</div> */}
            </header>
        )
    }

}


export default QuestionIndex