import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/serviceActions';

class ServicePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Service</h1>
        <Link to="/services" className="btn btn-primary btn-lg">Services</Link>
      
       </div>
    ); 
  }
}

ServicePage.propTypes= {
 
};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicePage);