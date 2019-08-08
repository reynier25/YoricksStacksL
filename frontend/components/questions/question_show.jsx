import React from 'react';
import QuestionItem from './question_item';
import AnswerNewContainer from '../answers/answer_new_container';
import AnswerIndexContainer from '../answers/answer_index_container';
import { Link } from 'react-router-dom';

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

    componentDidUpdate() {
        true;
    }

    render() {
        const {question} = this.props;
        // if (!question) {
        //     return null;
        // 

        // localStorage.setItem(this.props.match.params.questionId, this.props.question.body);
        if (!question) return null;

        let editOption;

        if (this.props.currentUser.id === question.author_id) {
            editOption = <Link to={`/questions/${this.props.questionId}/edit`}>Edit Question</Link>
        } else {
            editOption = null;
        }


        if (this.props.currentUser === null) {
            return (

                <div className="question-show">

                    <p className="ask-question-btn"><Link to={`/newquestion`}>Ask Question</Link></p>
                    <p className="edit-question-btn">{editOption}</p>

                    <h2>{this.props.question.title}

                    </h2>
                    {this.props.question.body}
                    
                    <p>Asked by: {this.props.question.username}</p>

                    <AnswerIndexContainer questionId={this.props.questionId} />

                    {/* {localStorage.getItem([this.props.match.params.questionId])} */}
                </div>
            )
        } else {
            return (

                <div className="question-show">

                    <p className="ask-question-btn"><Link to={`/newquestion`}>Ask Question</Link></p>
                    <p className="edit-question-btn">{editOption}</p>
                    <h2 className="question-header">{this.props.question.title}
                        
                    </h2>
                    <div className="question-body">{this.props.question.body}</div>
                    <p className="asked-by">Asked by: {this.props.question.username}</p>

                    <AnswerIndexContainer questionId={this.props.questionId} />



                    <AnswerNewContainer questionId={this.props.questionId} />

                    {/* {localStorage.getItem([this.props.match.params.questionId])} */}
                </div>
            )
        }

        // return (
            
        //     <div className="question-show">


        //         <h2>{this.props.question.title}</h2>
        //         {this.props.question.body}
        //         <p>Asked by: {this.props.question.username}</p>

        //         <AnswerIndexContainer questionId={this.props.questionId} />

                
        //         <AnswerNewContainer questionId={this.props.questionId} />
                
        //         {/* {localStorage.getItem([this.props.match.params.questionId])} */}
        //     </div>
        // )
    }

}


export default QuestionShow;