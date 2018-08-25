import React from 'react';
import PropTypes from 'prop-types';


const CreateTask = ({handleSubmit, createTask}) => (
    <div className="create_task">
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={createTask} name="long"/>
            <button>Push</button>
        </form>
    </div>

);


CreateTask.propTypes = {
  handleSubmit: PropTypes.func,
  createTask: PropTypes.func,
};

export default CreateTask;
