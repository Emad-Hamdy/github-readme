import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setRepo } from "../redux/actions";

const mapStateToProps = state => {
  return {
    repo: state.gitReducer.repo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setRepo: choice => {
      dispatch(setRepo(choice));
    }
  };
};

class Row extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.setRepo(this.props.name);
  }

  render() {
    return (
      <div>
        <Link to="/readme" onClick={this.handleClick}>
          <div className="row">
            <p>{this.props.name}</p>
          </div>
        </Link>
      </div>
    );
  }
}

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Row);

export default connectedApp;
