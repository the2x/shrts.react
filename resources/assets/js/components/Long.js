import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {compose, setPropTypes} from 'recompose';

const enhance = compose(
    setPropTypes({long: PropTypes.string}),
);

const Long = ({long}) => (
    <Fragment>{ long.substr(0, 20) + '...'}</Fragment>
);

export default enhance(Long);
