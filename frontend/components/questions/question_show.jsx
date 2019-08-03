import React from 'react';
// import QuestionItem from './question_item';

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId);
    }


    render() {
        const { question } = this.props;

        if (!question) {
            return null;
        }

        return (
            <div>
                {question.title}
                {question.body}
            </div>
        )
    }

}


export default QuestionShow;