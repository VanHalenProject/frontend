import React, { Component } from "react";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  //Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  //Validate if form is filled out.
  Object.values(rest).forEach((val) => {
    val == null && (valid = false);
  });
  return valid;
};

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      formErrors: {
        username: "",
        password: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log();
    } else {
      console.error("form invalid");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      /*If input.length > 0, the input will be validated. If the input is invalid,
            an errormessage will be printed out to the screen. If the input is valid no 
            message should be shown and the input should set the value.*/
      case "username":
        formErrors.username = value.length < 3 ? "Minimum of 3 characters" : "";
        break;
      /*If input.length > 0, the input will be validated. If the input is invalid,
            an errormessage will be printed out to the screen. If the input is valid no 
            message should be shown and the input should set the value.*/

      case "password":
        formErrors.password = value.length < 6 ? "Minimum of 6 characters" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  submitLogin = function () {
    fetch("https://vh-backend.herokuapp.com/api/user/auth", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    }).then((res) => {
      console.log("Request complete! response:", res);
    });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="App">
        <div className="pageHeader">Login</div>
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="username">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                /*the input is being checked when the input.length > 0. 
                    If the input is invalid, the classname changes to "error" 
                    and input field should turn red, if the input is valid, 
                    nothing should happen.*/
                className={formErrors.username.length > 0 ? "error" : null}
                placeholder="Username"
                name="username"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.username.length > 0 && (
                <span className="errorMessage"> {formErrors.username}</span>
              )}
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                /*the input is being checked when the input.length > 0. 
                    If the input is invalid, the classname changes to "error" 
                    and input field should turn red, if the input is valid, 
                    nothing should happen.*/
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />

              {formErrors.password.length > 0 && (
                <span className="errorMessage"> {formErrors.password}</span>
              )}
            </div>
            <div className="submitStyle">
              <button type="submit" onClick={this.submitLogin}>
                Login
              </button>
              {/* <small>Already have an account?</small> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
