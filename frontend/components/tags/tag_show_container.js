import { connect } from 'react-redux';
import TagShow from './tag_show';
import { fetchTag } from '../../actions/tags';
import { fetchQuestions } from '../../actions/questions';

const mapStateToProps = (state, ownProps) => ({
    tagId: ownProps.match.params.tagId,
    tag: state.entities.tags[ownProps.match.params.tagId],
    questions: Object.keys(state.entities.questions).map(id => state.entities.questions[id])
    // currentUser: state.session.currentUser,
    // tag1: state.entities
});

// const mapDispatchToProps = dispatch => ({
//     fetchTag: (id) => dispatch(fetchTag(id))
// });

const mapDispatchToProps = dispatch => {
    return {
        fetchTag: (id) => dispatch(fetchTag(id)),
        fetchQuestions: () => dispatch(fetchQuestions())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TagShow);