import React, { Component } from "react";
import "../App.css";
import Button from "../icons/CheckmarkButton.svg";
import { Link, withRouter } from "react-router-dom";
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
  constructor() {
    super();
    this.navigate = this.navigate.bind(this);
  }

  navigate(evt) {
    evt.preventDefault();
    this.props.history.push(`/projects/${this.props.username}`);
  }
  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.navigate}>
          <input
            type="text"
            value={this.props.username}
            onChange={this.props.setUsername}
            className="search"
            placeholder="Enter Github Username"
          />
        </form>

        <Link to={`/projects/${this.props.username}`}>
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
