import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";

class Alert extends React.Component {
  render() {
    return (
      <>
        <div>{console.log("in alert component", this.props)}</div>
        {
          <Dialog
            open={this.props.alertStatus}
            onClose={() => this.props.dispatch({ type: "alertClose" })}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
              {/* {console.log("form is false 1")} */}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => this.props.dispatch({ type: "alertClose" })}
                color="primary"
              >
                Disagree
              </Button>
              <Button
                onClick={() => this.props.dispatch({ type: "alertClose" })}
                color="primary"
                autoFocus
              >
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.alertReducer.alertStatus);

  return {
    alertStatus: state.alertReducer.alertStatus,
  };
};

export default connect(mapStateToProps)(Alert);
