import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as contactActions from '../../actions/contactActions';
import ContactForm from './ContactForm';

class ContactPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        contactInformation: Object.assign({},this.props.contactInformation),
        errors: {}
      };

    this.updateContactFormState = this.updateContactFormState.bind(this);
  }
  
  updateContactFormState(event) {
    const field = event.target.name;
    let contactInformation = this.state.contactInformation;
    contactInformation[field] = event.target.value;
    return this.setState({contactInformation: contactInformation});
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Contact</h1>
        <ContactForm 
          contactInformation={this.state.contactInformation} 
          onChange={this.updateContactFormState}
          errors={this.state.errors} />  
      </div>
    );
  }
}

ContactPage.propTypes= {
  contactInformation: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let contactInformation = {name: '', email: '', message:''};
  return {
    contactInformation: contactInformation
  };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);