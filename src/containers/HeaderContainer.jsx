import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header';

function mapStateToProps(state) {
  return {
    todos: state
  }
}

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
