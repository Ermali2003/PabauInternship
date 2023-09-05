import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import OptionDetail from "./OptionDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: "1/2",
      selectedOption: null,
    };
  }

  handleOptionSelect = (selectedOption) => {
    this.setState({
      selectedOption,
      currentStep: "2/2",
    });
  };

  handleBack = () => {
    this.setState({
      selectedOption: null,
      currentStep: "1/2",
    });
  };

  render() {
    return (
      <Router>
        <div>
          <header>
            <p>Choose Service</p>
            <p>Step {this.state.currentStep}</p>
          </header>
          <Routes>
            <Route
              path="/"
              element={<Home handleOptionSelect={this.handleOptionSelect} />}
            />
            <Route
              path="/option-detail"
              element={
                <OptionDetail
                  selectedOption={this.state.selectedOption}
                  handleBack={this.handleBack}
                />
              }
            />
          </Routes>
          <footer>
            <p>This is Footer</p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
