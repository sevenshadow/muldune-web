import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ContactForm from './ContactForm';

function setup() {
  let props = {
    contactInformation: {}, 
    onSave: () => {}, 
    onChange: () => {}, 
    errors: {}
  };
  let renderer = TestUtils.createRenderer();
  renderer.render(<ContactForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('ContactForm via React Test Utils', () => {
  it('renders form and h1', () => {
    const { output } = setup();
    expect(output.type).toBe('form');
    
  });

}); 

