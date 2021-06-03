import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function TextInput(props) {
  const [state, setstate] = useState("");
  return (
    <>
      {/* {console.log("props of tf", props)} */}
      <TextField
        id={props.id}
        label={props.label}
        variant={props.variant}
        className={props.className}
        defaultValue={state}
        onChange={(e) => {
          console.log("on change callws");
          setstate(e.target.value);
          // props.setFormInfo({
          //   title: "customerName",
          //   value: e.target.value,
          // });
        }}
        // value={state}
        // onChange={(e) => setstate(e.target.value)}
      />
    </>
  );
}
