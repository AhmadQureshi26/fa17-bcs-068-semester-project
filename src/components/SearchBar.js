import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import RefreshIcon from "@material-ui/icons/Refresh";
import { history } from "../Router/AppRouter.js";
import "../css/searchbar.css";
import { connect } from "react-redux";
import { startLoadingJobs } from "../actions/loadJobs.js";
import { searchJobs } from "../actions/searchJobs.js";
// import { formContext } from "../context/formContext.js";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function BasicTextFields(props) {
  console.log("props of search Bar", props);

  const classes = useStyles();
  return (
    <>
      <div id="searchBarMain">
        {/* <SearchIcon id="searchIcon" /> */}
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          id="searchBarForm"
          autoFocus={true}
        >
          <TextField
            id="standard-basic"
            label="Search"
            onChange={(e) => {
              if (e.target.value === "") {
                props.dispatch(startLoadingJobs());
              } else {
                props.dispatch(searchJobs({ search: e.target.value }));
              }
            }}
          />
        </form>
        <span
          data-toggle="tooltip"
          data-placement="bottom"
          title="Add a new job"
        >
          <AddIcon
            id="addIcon"
            onClick={() => {
              history.push("/admin/AddjobsPage");
              console.log("add btn clicked");
            }}
          />
        </span>
        <span data-toggle="tooltip" data-placement="bottom" title="Refresh">
          <RefreshIcon id="refreshIcon" />
        </span>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(BasicTextFields);
