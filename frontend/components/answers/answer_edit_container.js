import { connect } from 'react-redux';
import AnswerEdit from './answer_edit';
import { fetchAnswer, updateAnswer } from '../../actions/answers';

const mapStateToProps = (state, ownProps) => ({
    questionId: ownProps.match.params.questionId,
    answerId: ownProps.match.params.answerId,
    
    question: state.entities.questions[ownProps.match.params.questionId],
    answer: state.entities.answers[ownProps.match.params.answerId],
    // answer: state.entities.
    currentUser: state.session.currentUser,
    question1: state.entities,
    author_id: { id: state.session.currentUser.id }

});

const mapDispatchToProps = dispatch => {
    return {
        fetchAnswer: (id) => dispatch(fetchAnswer(id)),
        updateAnswer: (answer) => dispatch(updateAnswer(answer))
        // FROM QUESTION SHOW PAGE: SHOULD BE ABLE TO CLICK TO GO TO EDIT PAGE, QUESTION EDIT CONTAINER, THERE PASS UPDATEQUESTION PROP
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerEdit);