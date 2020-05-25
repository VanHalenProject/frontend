import React, { Component } from "react";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
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

export class CreateAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      email: "",
      password: "",
      formErrors: {
        userName: "",
        email: "",
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
      case "userName":
        formErrors.userName = value.length < 3 ? "Minimum of 3 characters" : "";
        break;
      case "email":
        formErrors.email =
          emailRegex.test(value) && value.length > 0
            ? ""
            : "Invalid email address.";
        break;
      case "password":
        formErrors.password = value.length < 6 ? "Minimum of 6 characters" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  submitAccount = function () {
    fetch("https://vh-backend.herokuapp.com/api/user/auth", {
      method: "POST",
      body: JSON.stringify({
        userName: this.state.userName,
        email: this.state.email,
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
        <div className="pageHeader">Create account</div>
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="userName">
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                className={formErrors.userName.length > 0 ? "error" : null}
                placeholder="Username"
                name="userName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.userName.length > 0 && (
                <span className="errorMessage"> {formErrors.userName}</span>
              )}
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage"> {formErrors.email}</span>
              )}
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
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
              <button type="submit" onClick={this.submitAccount}>
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default CreateAccount;
