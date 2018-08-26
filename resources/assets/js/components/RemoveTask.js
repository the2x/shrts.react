import React, {Fragment} from 'react'
import PropTypes from 'prop-types';


const RemoveTask = ({handleDeleteTask, id}) => (
    <Fragment>
        <form onSubmit={event => {
            event.preventDefault();
            handleDeleteTask(id)
        }}>
            <button>Remove</button>
        </form>
    </Fragment>
);

RemoveTask.propTypes = {
    handleDeleteTask: PropTypes.func,
    id: PropTypes.number,
};

export default RemoveTask;
