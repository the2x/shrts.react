import React from 'react';
import PropTypes from 'prop-types';
import {compose, setPropTypes, withHandlers, withState} from 'recompose';

const enhance = compose(
    setPropTypes({handleSubmit: PropTypes.func, createTask: PropTypes.func,}),
    withState('long', 'createTask', ''),
    withState('task', 'handleSubmit', []),

    withHandlers({
        handleCreateTask: props => event => {
            props.createTask(event.target.value);
            console.log('работает 1');
        },

        handleSubmitTask: props => event => {
            event.preventDefault();

            axios.post(window.location.href + 'create', {long: props.long})
                .then(response => {
                    props.handleSubmit([...task, response.data]);
                }).catch(error => console.log(error.response));

            console.log('работает');
        }
    })
);

const CreateTask = ({handleSubmitTask, handleCreateTask}) => (
    <div className="create_task">
        <form onSubmit={handleSubmitTask}>
            <input type="text" onChange={handleCreateTask} name="long"/>
            <button>Push</button>
        </form>
    </div>

);


export default enhance(CreateTask);
