import { connect } from 'react-redux';
import QuestionsIndex from './question_index';
import { fetchQuestions } from '../../actions/questions';

const mapStateToProps = state => ({
    questions: Object.keys(state.entities.questions).map(id => state.entities.questions[id])
});

const mapDispatchToProps = dispatch => ({
    fetchQuestions: () => dispatch(fetchQuestions())
});


export default connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex);