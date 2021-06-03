import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../css/badgeStatus.css";
import axios from "axios";
import { history } from "../Router/AppRouter";
import store from "../store/store";

const useStyles = makeStyles({
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
});

export default function OutlinedCard(props) {
  const classes = useStyles();

  const [state, setstate] = useState("demo");

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "" + props.endpoint, {
        headers: { authorization: store.getState().authReducer.token },
      })
      .then(({ data }) => {
        console.log(data);
        setstate(data.quantity);
      })
      .catch((e) => {
        // alert("Error fetching data!");
        console.log(e);
      });
  });

  return (
    <div className="badgeStatusContainer">
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {props.title ? props.title : "title"}
          </Typography>
          <Typography variant="h5" component="h2">
            {state}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            disabled={props.link ? false : true}
            onClick={(e) => history.push(props.link)}
          >
            learn more
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
