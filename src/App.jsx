import React from 'react';
import PropTypes from 'prop-types';

import HeaderContainer from './containers/HeaderContainer';
import ListContainer from './containers/ListContainer';
import FormContainer from './containers/FormContainer';

function App() {
  return (
      <main>
          <HeaderContainer/>
          <ListContainer/>
          <FormContainer/>
      </main>
  );
}

export default App;
