import React from 'react';
import PropTypes from 'prop-types';

const Chip = ({ value, onClick }) => (
  <div style={{ cursor: 'pointer' }} className="chip" onClick={onClick}>{value}</div>
);

Chip.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Chip;