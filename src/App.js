import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from "./search/main";
import Projects from "./projects/main";
import ReadMe from "./readme/main";

class App extends Component {
  render() {
    return (
      <div className="screen">
        <Router>
          <div>
            <header className="App-header">
              <Link to="/">
                <h1 className="App-title">Github IQ</h1>
              </Link>
            </header>

            <div className="App">
              <Route exact path="/" component={Search} />
              <Route path="/projects/:id" component={Projects} />
              <Route path="/:username/:repo/readme" component={ReadMe} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
