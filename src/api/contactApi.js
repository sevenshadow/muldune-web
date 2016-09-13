import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

class ContactApi {
  static submitContactForm(contactInformation) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, contactInformation));
      }, delay);
    });
  }

  
}

export default ContactApi;