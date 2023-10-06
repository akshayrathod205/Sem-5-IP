import React, { Component } from "react";

class DateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: null,
    };
  }

  handleDisplay = () => {
    const currentDateTime = new Date().toLocaleString();
    this.setState({ dateTime: currentDateTime });
  };

  render() {
    return (
      <div>
        <h2>Date and Time</h2>
        <p style={{ fontSize: "20px", fontWeight: "500", color: "blue" }}>
          {this.state.dateTime}
        </p>
        <button onClick={this.handleDisplay}>Display Date and Time</button>
      </div>
    );
  }
}

export default DateTime;
