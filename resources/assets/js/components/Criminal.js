import React from 'react'
import PropTypes from 'prop-types';


const Criminal = ({handleCheater, id}) => (
    <form onSubmit={event => {
        event.preventDefault();
        handleCheater(id)
    }}>
        <button>I'm a Criminal</button>
    </form>
);


Criminal.propTypes = {
    handleCheater: PropTypes.func,
    id: PropTypes.number,
};

export default Criminal;
