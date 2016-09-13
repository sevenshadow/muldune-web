import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function contactReducer(state = initialState.contactInformation, action= {}) {
  switch(action.type) {
    case types.SUBMIT_CONTACT_FORM_SUCCESS:
      return action.contactInformation;  
    default:
      return state;
  }

}