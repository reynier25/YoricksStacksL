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

<div>
        <table className="header-table">
            <thead>
                
                    <tr>
                        <th className="title">
                        All Questions
                        </th>
                        <th className="new-question-btn">
                            <Link to={`/newquestion`}>Ask Question</Link>
                        </th>
                    </tr>
                    <tr>
                        <th className="total-questions">
                            {questions.length} questions
                         </th>
                        <th className="total-questions"></th>
                    </tr>
                </thead>
            </table>

            <table className="questions-table">
            
                    {
                        questions.map(question => (
                            <QuestionItem
                                key={`${question.id}`}
                                currentUser={this.props.currentUser}
                                question={question} />
                            )
                        )
                    }

                
            </table>
            </div>
        )
    }

}


export default QuestionIndex
