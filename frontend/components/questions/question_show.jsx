import React from 'react';
import QuestionItem from './question_item';
import AnswerNewContainer from '../answers/answer_new_container';
import AnswerIndexContainer from '../answers/answer_index_container';
import { Link } from 'react-router-dom';

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);

        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvoteToZeroQuestion = this.handleDownvoteToZeroQuestion.bind(this);


        if (this.props.currentUser === null) {
            this.question_vote = null;
            this.question_downvote = null;
        } else {

            this.question_vote = {
                user_id: this.props.currentUser.id,
                question_id: this.props.questionId,
                upvoted: true
            }

            this.question_downvote = {
                user_id: this.props.currentUser.id,
                question_id: this.props.questionId,
                upvoted: false
            }
        }
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.questionId);
        this.props.fetchAllVotes(this.props.questionId);
    }


    handleUpvote(e) {
        e.preventDefault();
        if (Object.keys(this.props.questionVotes).includes(this.props.currentUser.id.toString())) {
            if (this.props.questionVotes[this.props.currentUser.id].upvoted === false) {
                // this.props.downvoteToZeroQuestion(this.question_vote)
                this.props.downvoteToZeroQuestion(this.props.questionVotes[this.props.currentUser.id.toString()])
                    .then(() => this.props.fetchAllVotes(this.props.questionId))
            } // modify reducer to match above state in constructor
        } else if (!Object.keys(this.props.questionVotes).includes(this.props.currentUser.id.toString())) {
            this.props.upvoteQuestion(this.question_vote)
        }
        // this.props.upvoteQuestion(this.question_vote)
            // .then(() => this.props.history.push(`/questions/${this.props.questionId}`))
    }

    // handleDownvote(e) {
    //     e.preventDefault();
    //     this.props.upvoteQuestion(this.question_downvote)
    // }

    handleDownvoteToZeroQuestion(e) {
        e.preventDefault();
        debugger;
        if (Object.keys(this.props.questionVotes).includes(this.props.currentUser.id.toString())) {
            // this.props.downvoteToZeroQuestion(this.question_vote)
            if (this.props.questionVotes[this.props.currentUser.id].upvoted === true) {
                this.props.downvoteToZeroQuestion(this.props.questionVotes[this.props.currentUser.id.toString()])
                    .then(() => this.props.fetchAllVotes(this.props.questionId))
            } // modify reducer to match above state in constructor
        } else {
            this.props.upvoteQuestion(this.question_downvote)
        }
            // .then(() => this.props.history.push(`/questions/${this.props.questionId}`))
    }

    // handleDownvote(e) {
    //     e.preventDefault();
    //     this.props.downvoteQuestion()
    //         .then(() => this.props.history.push(`/questions/${this.props.questionId}`))
    // }

    render() {
        const {question} = this.props;
        // if (!question) {
        //     return null;
        // 
        // localStorage.setItem(this.props.match.params.questionId, this.props.question.body);
        if (!question) return null;

        // if (Object.keys(this.props.questionVotes).length === 0) {
        //     debugger;
        //     return null;
        // }


        let editOption;

        if (this.props.currentUser === null) {
            editOption = null
        } else if (this.props.currentUser.id === question.author_id) {
            editOption = <Link to={`/questions/${this.props.questionId}/edit`}>Edit Question</Link>
        } else {
            editOption = null
        }

        // let upvoteData;
        // upvoteData = {
        //     user_id: this.props.currentUser.id,
        //     question_id: this.props.questionId,
        //     upvoted: true
        // }

        // let downvoteData;
        // downvoteData = {
        //     user_id: this.props.currentUser.id,
        //     question_id: this.props.questionId,
        //     upvoted: false
        // }

        let voteValue;

        voteValue = 0;
        Object.keys(this.props.questionVotes).forEach((key) => {
            if (this.props.questionVotes[key].upvoted) {
                voteValue += 1
            } else {
                voteValue -= 1
            }
        });


        if (this.props.currentUser === null) {
            return (

                <div className="question-show">

                    <p className="ask-question-btn"><Link to={`/newquestion`}>Ask Question</Link></p>
                    <p className="edit-question-btn">{editOption}</p>

                    <h2 className="question-header">{this.props.question.title}

                    </h2>
                    <div className="question-body">{this.props.question.body}</div>
                    <button className="upvote-button" onClick={this.handleUpvote}></button>
                    {/* <p>&nbsp;</p> */}
                    {/* <br />
                    <br />
                    <br /> */}
                    <div className="question-vote">{voteValue}</div>
                    <button className="downvote-button" onClick={this.handleDownvoteToZeroQuestion}></button>

                    <p className="asked-by">Asked by: {this.props.question.username}</p>

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
                    <button className="upvote-button" onClick={this.handleUpvote}></button>

                    <div className="question-vote">{voteValue}</div>
                    <button className="downvote-button" onClick={this.handleDownvoteToZeroQuestion}></button>

                    <p className="asked-by">Asked by: {this.props.question.username}</p>

                    <AnswerIndexContainer questionId={this.props.questionId} />



                    <AnswerNewContainer questionId={this.props.questionId} />

                    {/* {localStorage.getItem([this.props.match.params.questionId])} */}
                </div>
            )
        }

        // <button onClick={this.handleSubmit}>Post Your Answer</button>

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