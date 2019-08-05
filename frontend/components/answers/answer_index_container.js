import { connect } from 'react-redux';
import AnswerIndex from './answer_index';
import { fetchAnswers } from '../../actions/answers';

const mapStateToProps = state => ({
    answers: Object.keys(state.entities.answers).map(id => state.entities.answers[id]),
    question1: state.entities
});

const mapDispatchToProps = dispatch => ({
    fetchAnswers: (id) => dispatch(fetchAnswers(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndex);