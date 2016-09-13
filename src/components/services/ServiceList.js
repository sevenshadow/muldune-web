import React, {PropTypes} from 'react';
import ServiceListItem from './ServiceListItem';

const ServiceList = ({services}) => {
  return (
    <div className="row">
        {services.map(service => 
          <ServiceListItem key={service.id} service={service} />
        )}
    </div>
  );
};

ServiceList.propTypes= {
  services: PropTypes.array.isRequired
};

export default ServiceList;