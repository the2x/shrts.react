import React from 'react';
import PropTypes from 'prop-types';


const CountNumber = ({count = 0}) => (
    <span>{count}</span>
);


CountNumber.propTypes = {
    count: PropTypes.number,
};

export default CountNumber;
