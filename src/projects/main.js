import React, { Component } from "react";
import Row from "./row";
import { connect } from "react-redux";
import { requestRepos } from "../redux/actions";

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    username: ownProps.match.params.id,
    repos: state.requestRepos.repos,
    isPending: state.requestRepos.isPending,
    error: state.requestRepos.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestRepos: username => {
      dispatch(requestRepos(username));
    }
  };
};

class Projects extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.requestRepos(this.props.username);
  }

  render() {
    return this.props.isPending ? (
      <Row name={"Loading"} />
    ) : (
      <div className="projects">
        <h3>Projects</h3>

        <div className="table">
          {this.props.repos.map(item => (
            <Row name={item} username={this.props.username} key={item} />
          ))}
        </div>
      </div>
    );
  }
}

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);

export default connectedApp;
