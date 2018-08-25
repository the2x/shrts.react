import React from 'react'
import PropTypes from 'prop-types';


const RemoveTask = ({handleDeleteTask, id}) => (
    <form onSubmit={event => {
        event.preventDefault();
        handleDeleteTask(id)
    }}>
        <button>Remove</button>
    </form>
);


export default RemoveTask;
