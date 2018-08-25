import React from 'react'
import PropTypes from 'prop-types';

var moment = require('moment');


const MomentTimer = ({time}) => (
    <small>
        <span>
            {moment(time).locale('ru').fromNow()}
        </span>
    </small>
);


MomentTimer.propTypes = {
    time: PropTypes.string,
};

export default MomentTimer;
