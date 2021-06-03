import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import authenticateUser from "../actions/auth.js";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import "../css/login.css";
// import store from "../store/store";

class GetQuote extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    // this.password=React.createRef();
  }

  onLogin(e) {
    e.preventDefault();

    const password = e.target.elements.password;
    console.log("password", password);

    // store.dispatch(tryLogin(username));
    this.props.authenticate(password.value);
  }

  render() {
    return (
      <div className="loginParent">
        <Navbar />
        <div id="loginMain">
          <div>
            <Form onSubmit={this.onLogin}>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="input"
                  name="username"
                  id="username"
                  placeholder="Please enter your username here..."
                  defaultValue="admin"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password..."
                  id="exampleText"
                  // ref={this.password}
                />
              </FormGroup>

              <Button>Login</Button>
            </Form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { authenticate: (password) => dispatch(authenticateUser(password)) };
};

export default connect(undefined, mapDispatchToProps)(GetQuote);
