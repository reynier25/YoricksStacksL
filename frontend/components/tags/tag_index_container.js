import { connect } from 'react-redux';
import TagIndex from './tag_index';
import { fetchTags } from '../../actions/tags';

const mapStateToProps = state => ({
    tags: Object.keys(state.entities.tags).map(id => state.entities.tags[id]),
    // currentUser: state.session.currentUser,
    // tag1: state.entities
});

const mapDispatchToProps = dispatch => ({
    fetchTags: () => dispatch(fetchTags())
});


export default connect(mapStateToProps, mapDispatchToProps)(TagIndex);