import React from 'react';
import PropTypes from 'prop-types';
import Oops from '../pages/Oops';

export default class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError () {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Oops />;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired
};
