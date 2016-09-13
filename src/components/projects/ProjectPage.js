import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/projectActions';

class ProjectPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Project</h1>
        <Link to="/projects" className="btn btn-primary btn-lg">Projects</Link>
      
       </div>
    ); 
  }
}

ProjectPage.propTypes= {
 
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);