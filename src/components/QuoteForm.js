import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { customerQuery } from "../actions/customerQuery.js";
import validator from "validator";

export default () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("handleSubmit called");
    if (validator.isEmail(email) === true && message.length >= 15) {
      customerQuery({ email, message });
    } else alert("Email or product description is not valid!");
  };

  return (
    <div id="quoteMain">
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Please enter your email here..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Message</Label>
            <Input
              type="textarea"
              name="text"
              placeholder="Explain your product..."
              id="exampleText"
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormGroup>

          <Button onClick={(e) => handleSubmit()}>Submit</Button>
        </Form>
      </div>
    </div>
  );
};
