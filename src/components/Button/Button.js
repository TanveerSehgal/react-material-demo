import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, label }) => (
  <button
    type="button"
    className="waves-effect waves-light btn"
    onClick={onClick}
  >{label}</button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;