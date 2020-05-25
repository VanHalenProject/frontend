import React, { Component } from "react";

export class SubmitComp extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <button className="btn rounded-corners " type="submit">
              Submit
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default SubmitComp;
