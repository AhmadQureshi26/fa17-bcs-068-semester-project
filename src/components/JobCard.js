import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { startDeleteJob } from "../actions/deleteJob.js";
import { history } from "../Router/AppRouter.js";
import { setFormUpdate } from "../actions/costingFormActions.js";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
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
      {/* <ToastContainer /> */}
      <Card className={classes.root + " jobCard"}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {props.title.charAt(0)}
            </Avatar>
          }
          title={props.title + " for " + props.customer}
          subheader={props.time}
        />
        <CardMedia
          className={classes.media}
          image={props.src}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Material used in this job is {props.material}. Grammage is{" "}
            {props.gsm}. Up size was set to {props.upSizeW} x {props.upSizeL}.
            This product was printed in {props.printSizeW} x {props.printSizeL}
          </Typography>
        </CardContent>
        <div className="jobCardAction">
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
            onClick={(e) => {
              console.log(props);
              props.setForm(setFormUpdate(props.job));
              history.push("/admin/AddjobsPage/update/#" + props.id);
            }}
          >
            Update
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={(e) =>
              props.deleteAction(startDeleteJob(props.id, notify))
            }
          >
            Delete
          </Button>
        </div>
      </Card>
    </>
  );
}
