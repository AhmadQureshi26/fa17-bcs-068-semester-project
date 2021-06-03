import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import { startDeletingQuery } from "../actions/deleteQuery";
import "../css/customerQueryCard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SimpleCard(props) {
  const classes = useStyles();

  const notify = (message, status) => {
    if (status) {
      toast.success(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    console.log("notify was called");
  };

  return (
    <>
      <ToastContainer />
      <Card className={classes.root + "  queryCard"}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {props.time}
          </Typography>
          <Typography variant="h9" component="h5">
            {props.email}
          </Typography>
          <br />
          <Typography className={classes.pos} color="textSecondary">
            Message
          </Typography>

          <p>{props.message}</p>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={(e) =>
              props.dispatch(startDeletingQuery(props.id, notify))
            }
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
