import React, {Fragment} from 'react';
import PropTypes from 'prop-types';


const CountNumber = ({count = 0}) => (
    <Fragment>{count}</Fragment>
);


CountNumber.propTypes = {
    count: PropTypes.number,
};

export default CountNumber;
