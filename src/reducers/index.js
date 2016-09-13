import  {combineReducers} from 'redux';
import projects from './projectsReducer';
import services from './servicesReducer';
import contactResponse from './contactReducer';

const rootReducer = combineReducers({
  projects,
  services,
  contactResponse
});

export default rootReducer;