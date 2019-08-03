import React from 'react';
import { connect } from 'react-redux';
import LeftNavBar from './left_nav_bar';
import { logout } from '../../actions/session';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});



export default connect(mapStateToProps, mapDispatchToProps)(LeftNavBar);