import { connect } from 'react-redux';
import { postQuestion } from '../../actions/questions';
import QuestionNew from './question_new';

const mapDispatchToProps = dispatch => ({
    postQuestion: question => dispatch(postQuestion(question))
});

const mapStateToProps = (state) => {
    return {
        author_id: { id: state.session.currentUser.id },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionNew);