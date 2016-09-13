import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const projects = [
  {
    id: 'tagnifi-web',
    name: 'TagniFi Web Viewer'
  },
  {
    id: 'progow-web',
    name: 'Progow Website'
  },
  {
    id: 'burnuli-web',
    name: 'Burnuli Website'
  },
  {
    id: 'the-morning-monte',
    name: 'The Morning Monte'
  },
  {
    id: 'prudena-web',
    name: 'Prudena'
  }
];

class ProjectsApi {
  static getAllProjects() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], projects));
      }, delay);
    });
  }

  
}

export default ProjectsApi;