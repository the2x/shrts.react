import React, {Fragment} from 'react'
import PropTypes from 'prop-types';


const Cheater = ({handleCheater, id}) => (
    <Fragment>
        <form onSubmit={event => {
            event.preventDefault();
            handleCheater(id)
        }}>
            <button>Cheater</button>
        </form>
    </Fragment>
);


Cheater.propTypes = {
    handleCheater: PropTypes.func,
    id: PropTypes.number,
};

export default Cheater;
