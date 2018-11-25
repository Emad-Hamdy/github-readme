import React, { Component } from "react";
import "../App.css";
import Button from "../icons/CheckmarkButton.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setUsername } from "../redux/actions";

const mapStateToProps = state => {
  return {
    username: state.gitReducer.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUsername: event => {
      dispatch(setUsername(event.target.value));
    },
    requestRepos: name => {
      dispatch(requestRepos(name));
    }
  };
};

class Search extends Component {
  render() {
    return (
      <div className="search-container">
        <label>
          <input
            type="text"
            value={this.props.username}
            onChange={this.props.setUsername}
            className="search"
            placeholder="Enter Github Username"
          />
        </label>

        <Link to="/projects">
          <div className="submit">
            <Button />
          </div>
        </Link>
      </div>
    );
  }
}

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default connectedApp;
