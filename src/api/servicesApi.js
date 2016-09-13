import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const services = [
  {
    id: 'web-development',
    name: 'Web Development'
  },
  {
    id: 'fiancial-analysis',
    name: 'Fiancial Analysis'
  }
];


class ServicesApi {
  static getAllServices() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], services));
      }, delay);
    });
  }

  
}

export default ServicesApi;