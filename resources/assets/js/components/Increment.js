import React, {Fragment} from 'react';
import PropTypes from 'prop-types';


const Increment = ({id}) => (
    <Fragment>{id}</Fragment>
);


Increment.propTypes = {
    id: PropTypes.number,
};

export default Increment;
