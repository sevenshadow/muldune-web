import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const ServiceListItem = ({service}) => {
  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="panel panel-default">
        <div className="panel-body">
          <Link to={`/service/${service.id}`} className="btn btn-primary btn-lg">{service.name}</Link>
        </div>
      </div>
    </div>
  );

};

ServiceListItem.propTypes= {
  service: PropTypes.object.isRequired
};

export default ServiceListItem;