import React, { useEffect } from "react";
import ResponsiveDrawer from "./Drawer.js";
import { startListenToClientQuery } from "../service/socketService.js";

export default (props) => {
  useEffect(() => {
    startListenToClientQuery();
    return () => {
      // cleanup;
    };
  }, []);
  return (
    <>
      {console.log("props in admin", props)}
      <ResponsiveDrawer title={props.title} page={props.match.params.page} />
    </>
  );
};
