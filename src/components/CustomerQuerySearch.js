import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../css/customerQueryCard.css";
import { startLoadingQueries } from "../actions/loadQueries.js";
import { searchQueries } from "../actions/searchQueries.js";

export const CustomerQuerySearch = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));
  const classes = useStyles();
  return (
    <div className="querySearchMain">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Search  "
          onChange={(e) => {
            if (e.target.value === "") {
              props.dispatch(startLoadingQueries());
            } else {
              props.dispatch(searchQueries({ search: e.target.value }));
            }
          }}
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(CustomerQuerySearch);
