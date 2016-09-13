import React, {PropTypes} from 'react';
import ProjectListItem from './ProjectListItem';

const ProjectList = ({projects}) => {
  return (
      <div className="row">
          {projects.map(project => 
            <ProjectListItem key={project.id} project={project} />
          )}
      </div>
    
  );

};

ProjectList.propTypes= {
  projects: PropTypes.array.isRequired
};

export default ProjectList;