import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from "./search/main";
import Projects from "./projects/main";
import ReadMe from "./readme/main";
import BackButton from "./icons/backButton.svg";

class App extends Component {
  render() {
    return (
      <div className="screen">
        <Router>
          <div>
            <header className="App-header">
              <Route
                path="/projects"
                render={() => (
                  <Link to="/">
                    {" "}
                    <BackButton className="backButton" />{" "}
                  </Link>
                )}
              />
              <Route
                path="/readme"
                render={() => (
                  <Link to="/projects">
                    {" "}
                    <BackButton className="backButton" />{" "}
                  </Link>
                )}
              />
              <h1 className="App-title">Github IQ</h1>
            </header>

            <div className="App">
              <Route exact path="/" component={Search} />
              <Route path="/projects" component={Projects} />
              <Route path="/readme" component={ReadMe} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
