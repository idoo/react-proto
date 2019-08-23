import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Content from './Content.jsx';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {} = this.props;
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

Container.propTypes = {};

export default Container;
