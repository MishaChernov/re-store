import React from 'react';
import ErrorIndicator from '../ErrorIndicator'

class ErrorBoundary extends React.Component {

  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({hasError: true})
  }

  render() {
    if(this.state.hasError) {
      return (
        <div>
          <ErrorIndicator />
        </div>
      )
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;