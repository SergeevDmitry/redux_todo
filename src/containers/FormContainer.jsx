import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from '../components/Form';
import { addTodo } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    onAdd: title => dispatch(addTodo(title))
  }
}

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;
