import * as types from './actionTypes';
import projectsApi from '../api/projectsApi';

export function loadProjectsSuccess(projects) {
  return {
    type: types.LOAD_PROJECTS_SUCCESS, 
    projects: projects
  };
}

export function loadProjects() {
  return function(dispatch) {
    return projectsApi.getAllProjects().then(projects => {
      dispatch(loadProjectsSuccess(projects)) ;
    }).catch(error => {
      throw(error);
    });
  };
}