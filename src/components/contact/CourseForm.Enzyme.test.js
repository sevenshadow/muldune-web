import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TesUtils from 'react-addons-test-utils';
import ContactForm from './ContactForm';

function setup() {
  let props = {
    contactInformation: {}, 
    onSave: () => {}, 
    onChange: () => {}, 
    errors: {}
  };
  
  return shallow(<ContactForm {...props} />);
}

describe('ContactForm via React Test Utils', () => {

  it('renders form and h1', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
    
  });
});
