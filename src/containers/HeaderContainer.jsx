import React from 'react';

import Header from '../components/Header';

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;
  }

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const todos = this.store.getState();

    return (
      <Header todos={todos} />
    )
  }
}

export default HeaderContainer;
