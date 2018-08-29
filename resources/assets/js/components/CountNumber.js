import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {compose, setPropTypes, defaultProps} from 'recompose';

const enhance = compose(
    setPropTypes({ count: PropTypes.number,}),
    defaultProps({ count: 0})
);

const CountNumber = ({count}) => (
    <Fragment>{count}</Fragment>
);

export default enhance(CountNumber);
