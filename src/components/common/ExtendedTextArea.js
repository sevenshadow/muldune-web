import React, {PropTypes} from 'react';

const ExtendedTextArea = ({name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 1) {
    wrapperClass += " " + "has-error";
  }

  return (
      <div className={wrapperClass} >
          <label htmlFor={name}>{label}</label>
          <div className="field">
            <textarea 
              name={name}
              className="form-control"
              placeholder={placeholder}
              value={value}
              onChange={onChange} />
              {error && <div className="alert alert-danger">{error}</div>}
          </div>
      </div>
  );
};

ExtendedTextArea.propTypes= {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired
};

export default ExtendedTextArea;