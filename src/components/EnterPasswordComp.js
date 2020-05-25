import React, { Component } from "react";

export class EnterPasswordComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
    };
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <label className="label">Password</label>
          </li>

          <li>
            <input
              className="input rounded-corners"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default EnterPasswordComp;
