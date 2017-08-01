import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ id, name, label, value, onChange }) => (
  <div className="input-field">
    <input
      id={id || name}
      className="validate"
      type="text"
      value={value}
      onChange={onChange}
    />

    <label htmlFor={id || name} className="first_name">{label}</label>
  </div>
);

InputField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  label: '',
};

export default InputField;