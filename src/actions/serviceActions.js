import * as types from './actionTypes';
import servicesApi from '../api/servicesApi';

export function loadServicesSuccess(services) {
  return {
    type: types.LOAD_SERVICES_SUCCESS, 
    services: services
  };
}

export function loadServices() {
  return function(dispatch) {
    return servicesApi.getAllServices().then(projects => {
      dispatch(loadServicesSuccess(projects)) ;
    }).catch(error => {
      throw(error);
    });
  };
}