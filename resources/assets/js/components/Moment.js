import React, {Fragment} from 'react'
import PropTypes from 'prop-types';

var moment = require('moment');


const MomentTimer = ({time}) => (
    <Fragment>{moment(time).locale('ru').fromNow()}</Fragment>
);


MomentTimer.propTypes = {
    time: PropTypes.string,
};

export default MomentTimer;
