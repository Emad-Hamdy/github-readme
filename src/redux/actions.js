import {
  ADD_REPO,
  CHANGE_USERNAME,
  REQUEST_REPOS_SUCCESS,
  REQUEST_README_SUCCESS
} from "./constants";

export const setUsername = username => {
  return {
    type: CHANGE_USERNAME,
    payload: username
  };
};

export const setRepo = repo => {
  return {
    type: ADD_REPO,
    payload: repo
  };
};

export const requestReadme = (username, repo) => dispatch => {
  fetch(
    `https://raw.githubusercontent.com/${username}/${repo}/master/README.md`
  )
    .then(body => body.text())
    .then(data => {
      dispatch({ type: REQUEST_README_SUCCESS, payload: data });
    })
    .catch(err => console.log(err));
};

export const requestRepos = function requestRepos(username) {
  return function getReposThunk(dispatch, getState) {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(data => {
        data = data.map(item => item.name);
        return dispatch({ type: REQUEST_REPOS_SUCCESS, payload: data });
      })
      .catch(err => console.log(err));
  };
};
