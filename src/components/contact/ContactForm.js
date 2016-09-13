import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import ExtendedTextArea from '../common/ExtendedTextArea';

const ContactForm = ({contactInformation, onSave, onChange, errors}) => {
  return (
      <form>
        <TextInput 
          name="name"
          label="Name"
          value={contactInformation.name}
          onChange={onChange}
          error={errors.length} />
         
         <TextInput 
          name="email"
          label="Email"
          value={contactInformation.email}
          onChange={onChange}
          error={errors.length}
         /> 

         <ExtendedTextArea 
          name="message"
          label="Message"
          value={contactInformation.message}
          onChange={onChange}
          error={errors.length}
         /> 
         
        <input 
          type="submit"
          className="btn btn-primary"
          onClick={onSave}  />   
      </form>
    
  );

};

ContactForm.propTypes= {
  contactInformation: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default ContactForm;