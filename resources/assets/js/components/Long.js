import React from 'react';
import PropTypes from 'prop-types';

const Long = ({long}) => (
    <small>{ long.substr(0, 20) + '...'}</small>
);


Long.propTypes = {
  long: PropTypes.string,
};

export default Long;
