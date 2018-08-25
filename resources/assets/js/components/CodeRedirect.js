import React from 'react';
import PropTypes from 'prop-types';


const CodeRedirect = ({handleSubmitCount, id, long, code}) => (
    <form onSubmit={event => {
        event.preventDefault();
        handleSubmitCount(id, long)
    }}>
        <button>{window.location.href + '' + code}</button>
    </form>
);


CodeRedirect.propTypes = {
    handleSubmitCount: PropTypes.func,
    id: PropTypes.number,
    long: PropTypes.string,
    code: PropTypes.string,
};

export default CodeRedirect;
