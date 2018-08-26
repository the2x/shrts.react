import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Long = ({long}) => (
    <Fragment>{ long.substr(0, 20) + '...'}</Fragment>
);


Long.propTypes = {
  long: PropTypes.string,
};

export default Long;
