import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../css/imageUploader.css";
import { totalFormDataEnter } from "../actions/costingFormActions.js";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function UploadButtons(props) {
  const classes = useStyles();
  return (
    <div className={classes.root + " imageUploaderMy"}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={(e) => {
          console.log(e.target.files[0]);
          props.dispatch(
            totalFormDataEnter({
              title: "productImage",
              value: e.target.files[0],
            })
          );
        }}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload image
        </Button>
      </label>
    </div>
  );
}
