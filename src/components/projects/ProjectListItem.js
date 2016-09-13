import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const ProjectListItem = ({project}) => {
  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="panel panel-default">
        <div className="panel-body">
          <Link to={`/project/${project.id}`} className="btn btn-primary btn-lg">{project.name}</Link>
        </div>
      </div>
    </div>
  );

};

ProjectListItem.propTypes= {
  project: PropTypes.object.isRequired
};

export default ProjectListItem;