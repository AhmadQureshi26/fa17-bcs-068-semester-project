import React, { Component } from "react";
import JobBaseForm from "./JobBaseForm";
import FixedCostForm from "./FixedCostForm";
import VariableCostForm from "./VariableCostForm";
import TotalCostForm from "./TotalCostForm";

import { connect } from "react-redux";

class AddJobsPage extends Component {
  render() {
    return (
      <div className="addJobsRoot">
        {console.log("add jobs page props", this.props)}
        {/* <NewJobForm /> */}
        <JobBaseForm />
        <FixedCostForm />
        <VariableCostForm />
        <TotalCostForm />
      </div>
    );
  }
}

export default connect()(AddJobsPage);
