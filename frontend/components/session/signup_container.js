import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser))
});

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);