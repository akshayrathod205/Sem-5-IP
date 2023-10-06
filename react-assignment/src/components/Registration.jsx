import React, { Component } from "react";
import "./Registration.css";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      branch: "it",
      languages: {
        javascript: false,
        python: false,
        java: false,
        cpp: false,
      },
      gender: "male",
    };
  }

  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "text" && !/^[a-zA-Z0-9]*$/.test(value)) {
      return;
    }

    // Update state based on input type
    if (type === "checkbox") {
      this.setState((prevState) => ({
        languages: {
          ...prevState.languages,
          [name]: checked,
        },
      }));
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Display an alert with form data
    alert("Form submitted successfully!");
  };

  handleReset = () => {
    this.setState({
      firstName: "",
      lastName: "",
      address: "",
      branch: "it",
      languages: {
        javascript: false,
        python: false,
        java: false,
        cpp: false,
      },
      gender: "male",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleSubmit(e);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} onKeyPress={this.handleKeyPress}>
        <h2>Registration Form</h2>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <textarea
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Branch:
            <select
              name="branch"
              value={this.state.branch}
              onChange={this.handleInputChange}
            >
              <option value="it">IT</option>
              <option value="comps">COMPS</option>
              <option value="aids">AIDS</option>
            </select>
          </label>
        </div>
        <div className="check">
          <label>Programming Languages:</label>
          <div>
            <label>
              JavaScript
              <input
                type="checkbox"
                name="javascript"
                checked={this.state.languages.javascript}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Python
              <input
                type="checkbox"
                name="python"
                checked={this.state.languages.python}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Java
              <input
                type="checkbox"
                name="java"
                checked={this.state.languages.java}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              C++
              <input
                type="checkbox"
                name="cpp"
                checked={this.state.languages.cpp}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
        </div>
        <div>
          <label>
            Gender:
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleInputChange}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleInputChange}
            />
            Female
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={this.handleReset}>
            Reset
          </button>
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
