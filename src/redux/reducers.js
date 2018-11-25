import {
  CHANGE_USERNAME,
  ADD_REPO,
  REQUEST_REPOS_PENDING,
  REQUEST_REPOS_SUCCESS,
  REQUEST_REPOS_FAILED,
  REQUEST_README_PENDING,
  REQUEST_README_SUCCESS,
  REQUEST_README_FAILED
} from "./constants";

const initialState = {
  username: "",
  repo: ""
};

const initialStateData = {
  repos: [],
  isPending: false,
  error: ""
};

const initialStateReadme = {
  readme: "",
  isPending: false,
  error: ""
};

export const gitReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      return Object.assign({}, state, { username: action.payload });
    case ADD_REPO:
      return Object.assign({}, state, { repo: action.payload });
    default:
      return state;
  }
};

export const requestRepos = (state = initialStateData, action = {}) => {
  switch (action.type) {
    case REQUEST_REPOS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_REPOS_SUCCESS:
      return Object.assign({}, state, {
        repos: action.payload,
        isPending: false
      });
    case REQUEST_REPOS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      });
    default:
      return state;
  }
};

export const requestReadme = (state = initialStateReadme, action = {}) => {
  switch (action.type) {
    case REQUEST_README_PENDING:
      return Object.assign({}, state, { isPending: false });
    case REQUEST_README_SUCCESS:
      return Object.assign({}, state, {
        readme: action.payload,
        isPending: false
      });
    case REQUEST_README_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      });
    default:
      return state;
  }
};
