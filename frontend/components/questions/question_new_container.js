import { connect } from 'react-redux';
import { postQuestion } from '../../actions/questions';
import QuestionNew from './question_new';
import { fetchTags } from '../../actions/tags';

const mapDispatchToProps = dispatch => ({
    postQuestion: question => dispatch(postQuestion(question)),
    fetchTags: () => dispatch(fetchTags())
});

const mapStateToProps = (state) => {
    return {
        tags: Object.keys(state.entities.tags).map(id => state.entities.tags[id]),
        author_id: { id: state.session.currentUser.id },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionNew);