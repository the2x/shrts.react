import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {compose, setPropTypes} from 'recompose';

const enhance = compose(
    setPropTypes({id: PropTypes.number}),
);

const Increment = ({id}) => (
    <Fragment>{id}</Fragment>
);

export default enhance(Increment);
