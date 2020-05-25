import React, { Component } from "react";

export class EnterNameComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <label className="label">Username</label>
          </li>

          <li>
            <input
              className="input rounded-corners"
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default EnterNameComp;
