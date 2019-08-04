import React from 'react';
import QuestionItem from './question_item';

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.questionId);
    }

    // componentWillReceive(nextProps) {

    //     const internalState = nextProps.question;
    //     this.setState({ internalState });

        // update your internal state that depends on the props
        // const internalState = nextProps.something
        // this.setState({internalState}
    // }

    // componentDidUpdate() {
    //     this.props.fetchQuestion(this.props.match.params.questionId);
    // }


    render() {
        // debugger;
        const {question} = this.props;
        // if (!question) {
        //     return null;
        // }

        // localStorage.setItem(this.props.match.params.questionId, this.props.question.body);

        return (
            
            <div className="question-show">
                <h2>{this.props.question.title}</h2>
                {this.props.question.body}
                <h2>{this.props.question.username}</h2>
                {/* {localStorage.getItem([this.props.match.params.questionId])} */}
            </div>
        )
    }

}


export default QuestionShow;