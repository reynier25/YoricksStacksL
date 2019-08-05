import { connect } from 'react-redux';
import AnswerNew from './answer_new';
import { postAnswer } from '../../actions/answers';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    author_id: { id: state.session.currentUser.id },
    // question_id: { id: ownProps.questionId }
});

const mapDispatchToProps = dispatch => ({
    postAnswer: (answer) => dispatch(postAnswer(answer))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnswerNew));