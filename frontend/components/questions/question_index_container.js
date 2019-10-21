import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { fetchQuestions } from '../../actions/questions';

const mapStateToProps = state => {
    // debugger;
    return {
        questions: Object.keys(state.entities.questions).map(id => state.entities.questions[id]),
        // currentUser: state.session.currentUser,
        question1: state.entities,
        // questionVotes: state.entities.questionVotes
    }
};

const mapDispatchToProps = dispatch => ({
    fetchQuestions: () => dispatch(fetchQuestions())
});


export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);