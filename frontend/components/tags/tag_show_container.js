import { connect } from 'react-redux';
import TagShow from './tag_show';
import { fetchTag } from '../../actions/tags';

const mapStateToProps = (state, ownProps) => ({
    tagId: ownProps.match.params.tagId,
    tag: state.entities.tags[ownProps.match.params.tagId]
    // currentUser: state.session.currentUser,
    // tag1: state.entities
});

// const mapDispatchToProps = dispatch => ({
//     fetchTag: (id) => dispatch(fetchTag(id))
// });

const mapDispatchToProps = dispatch => {
    return {
        fetchTag: (id) => dispatch(fetchTag(id))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TagShow);