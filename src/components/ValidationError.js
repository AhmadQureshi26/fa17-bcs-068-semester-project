import React, { Component } from "react";
// import { connect } from "react-redux";
import "../css/validationError.css";

export default class ValidationError extends Component {
  render() {
    return (
      <>
        {console.log("props in validation error", this.props)}
        {this.props.visible === true ? (
          <div id="validationRoot">Validation error! cannot be submitted.</div>
        ) : (
          <div></div>
        )}
      </>
    );
  }
}

// // const mapStateToProps = (state) => {
// //   return { validationError: state.costingFormReducer.validationError };
// // };

// // const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(ValidationError);
