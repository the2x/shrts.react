import React, {Fragment} from 'react'
import PropTypes from 'prop-types';
import {compose, setPropTypes} from 'recompose';

var moment = require('moment');

const enhance = compose(
    setPropTypes({time: PropTypes.string}),
);

const MomentTimer = ({time}) => (
    <Fragment>{moment(time).locale('ru').fromNow()}</Fragment>
);

export default enhance(MomentTimer);
