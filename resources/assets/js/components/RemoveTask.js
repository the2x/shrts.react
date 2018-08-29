import React, {Fragment} from 'react'
import PropTypes from 'prop-types';
import {compose, setPropTypes, withHandlers, withState} from 'recompose';


const enhance = compose(
    setPropTypes({handleDeleteTask: PropTypes.func, id: PropTypes.number}),
    withState('task', 'deleteTask', []),
    withHandlers({
        handleDeleteTask: props => () => {
            axios.post(window.location.href + 'task/' + props.id, {params: {id: props.id}, _method: 'delete'})
                .then(response => {
                    props.deleteTask([...response.data]);
                    console.log('Удаление работает');
                })
                .catch(error => console.log(error));
        }
    })
);

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

export default enhance(RemoveTask);
