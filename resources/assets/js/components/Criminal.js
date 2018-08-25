import React from 'react'
import PropTypes from 'prop-types';


const Cheater = ({handleCheater, id}) => (
    <form onSubmit={event => {
        event.preventDefault();
        handleCheater(id)
    }}>
        <button>Cheater</button>
    </form>
);


Cheater.propTypes = {
    handleCheater: PropTypes.func,
    id: PropTypes.number,
};

export default Cheater;
