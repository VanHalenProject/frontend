import React, { Component } from "react";
import EnterNameComp from "./EnterNameComp";
import EnterPasswordComp from "./EnterPasswordComp";
import SubmitComp from "./SubmitComp";

export class LoginFormComponent extends Component {
  render() {
    return (
      <div className="container rounded-corners">
        <form>
          <EnterNameComp />
          <EnterPasswordComp />
          <SubmitComp />
        </form>
      </div>
    );
  }
}

export default LoginFormComponent;
