import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Admin from "../components/Admin.js";

class PrivateRoute extends Component {
  render() {
    if (this.props.authenticated) {
      return (
        <div>
          {console.log(this.props)}
          <Route
            path={this.props.path}
            component={Admin}
            title={this.props.title}
          />
        </div>
      );
    }
    return (
      <div>
        <Route path={this.props.path} component={this.props.component} />
      </div>
    );
  }
}

export default connect((state) => {
  return {
    authenticated: state.authReducer.authenticated,
  };
})(PrivateRoute);
