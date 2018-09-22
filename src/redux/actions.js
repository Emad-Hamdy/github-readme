import { 
    ADD_REPO,
    CHANGE_USERNAME,
    REQUEST_REPOS_PENDING,
    REQUEST_REPOS_SUCCESS,
    REQUEST_REPOS_FAILED, 
    REQUEST_README_PENDING,
    REQUEST_README_SUCCESS,
    REQUEST_README_FAILED 
} from './constants';



export const setUsername = (username) => {
    
    return {
        type: CHANGE_USERNAME,
        payload: username
    }

}


export const setRepo = (repo) => {
    
    return {
        type: ADD_REPO,
        payload: repo
    }

}


export const requestRepos = (username) => (dispatch) => {
    dispatch({ type : REQUEST_REPOS_PENDING });
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then((data) => {

                data = data.map(item => item.name )
                return dispatch({ type : REQUEST_REPOS_SUCCESS, payload : data })  

            })
        .catch(err => dispatch( {type : REQUEST_REPOS_FAILED,  payload: err} ))
}


export const requestReadme = (username, repo) => (dispatch) => {
    dispatch({ type : REQUEST_README_PENDING });
    fetch(`https://raw.githubusercontent.com/${username}/${repo}/master/README.md`)
        .then(body => body.text())
        .then((data) => { dispatch({ type : REQUEST_README_SUCCESS, payload : data })  })
        .catch(err => dispatch( {type : REQUEST_README_FAILED,  payload: err} ))
}