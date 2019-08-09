import { connect } from 'react-redux';
import QuestionShow from './question_show';
import { fetchQuestion } from '../../actions/questions';
import { upvoteQuestion, fetchAllVotes } from '../../actions/votes';

const mapStateToProps = (state, ownProps) => ({
    questionId: ownProps.match.params.questionId,
    question: state.entities.questions[ownProps.match.params.questionId],
    currentUser: state.session.currentUser,
    questionVotes: state.entities.questionVotes,
    question1: state.entities
});

const mapDispatchToProps = dispatch => {
    return {
        fetchQuestion: (id) => dispatch(fetchQuestion(id)),
        upvoteQuestion: (vote) => dispatch(upvoteQuestion(vote)),
        fetchAllVotes: (id) => dispatch(fetchAllVotes(id))
        // updateQuestion: (question) => dispatch(updateQuestion(question))
        // FROM QUESTION SHOW PAGE: SHOULD BE ABLE TO CLICK TO GO TO EDIT PAGE, QUESTION EDIT CONTAINER, THERE PASS UPDATEQUESTION PROP
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);