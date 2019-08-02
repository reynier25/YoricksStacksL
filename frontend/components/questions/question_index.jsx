import React from 'react';
import QuestionItem from './question_item';

class QuestionIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchQuestions();
    }


    render() {
        const { questions } = this.props;

        return (
            <header className = "all-questions">Top Questions
                <ul>
                    {
                        questions.map(question => (
                            <QuestionItem
                                key={`${question.id}`}
                                question={question} />
                            )
                        )
                    }
                </ul>
            </header>
        )
    }

}


export default QuestionIndex