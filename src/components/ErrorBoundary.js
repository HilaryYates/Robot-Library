import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: flase };
  }
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  rendor() {
    if (this.state.hasError) {
      return <h1>Ay Yay Yay Something Went Wrong!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
