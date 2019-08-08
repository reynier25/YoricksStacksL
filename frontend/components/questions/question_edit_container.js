import { connect } from 'react-redux';
import QuestionEdit from './question_edit';
import { updateQuestion, fetchQuestion } from '../../actions/questions';

const mapStateToProps = (state, ownProps) => ({
    questionId: ownProps.match.params.questionId,
    question: state.entities.questions[ownProps.match.params.questionId],
    currentUser: state.session.currentUser,
    question1: state.entities
});

const mapDispatchToProps = dispatch => {
    return {
        fetchQuestion: (id) => dispatch(fetchQuestion(id)),
        updateQuestion: (question) => dispatch(updateQuestion(question))
        // FROM QUESTION SHOW PAGE: SHOULD BE ABLE TO CLICK TO GO TO EDIT PAGE, QUESTION EDIT CONTAINER, THERE PASS UPDATEQUESTION PROP
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEdit);