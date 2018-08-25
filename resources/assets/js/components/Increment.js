import React from 'react';
import PropTypes from 'prop-types';


const Increment = ({id}) => (
    <small>{id}</small>
);


Increment.propTypes = {
    id: PropTypes.number,
};

export default Increment;
