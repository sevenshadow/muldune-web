import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function servicesReducer(state = initialState.services, action= {}) {
  switch(action.type) {
    case types.LOAD_SERVICES_SUCCESS:
      return action.services;  
    default:
      return state;
  }

}