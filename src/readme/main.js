import React, { Component } from 'react';
import {  MarkdownPreview  } from 'react-marked-markdown';
import { connect } from 'react-redux';
import { requestReadme } from '../redux/actions';

const mapStateToProps = state => {
  return {
   repo : state.gitReducer.repo,
   username : state.gitReducer.username,
   readme : state.requestReadme.readme
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestReadme: (username , repo) => {
      dispatch(requestReadme(username, repo))
    }
  }
}



class Readme extends Component {


  componentDidMount(){
   this.props.requestReadme(this.props.username, this.props.repo);

  }


  render() {

    return (

      <div className="readme">
        <MarkdownPreview value={this.props.readme} />
      </div>

    );
  }
}

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Readme)

export default connectedApp;
