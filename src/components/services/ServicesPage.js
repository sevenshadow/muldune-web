import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as serviceActions from '../../actions/serviceActions';
import ServiceList from './ServiceList';

class ProjectsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {services} = this.props;
    return (
      <div>
        <h1>Services</h1>
          <ServiceList services={services} />
      </div>
    );
  }
}

ProjectsPage.propTypes= {
  services: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  
};

function mapStateToProps(state, ownProps) {
  return {
    services: state.services
  };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(serviceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);