import React from 'react';
import PropTypes from 'prop-types';
import {compose, setPropTypes, withHandlers, withState} from 'recompose';


const enhance = compose(
    setPropTypes({
        handleSubmitCount: PropTypes.func,
        id: PropTypes.number,
        long: PropTypes.string,
        code: PropTypes.string
    }),
    withState('task', 'submitCount', []),
    withState('profile', 'profileClicked', []),
    withHandlers({
        handleSubmitCount: props => () => {

            axios.post(window.location.href + 'task/' + props.id, {id: props.id})
                .then(response => {
                    props.submitCount([...props.task, response.data]);
                    window.open(props.long, '_blank');
                    console.log('работает клик');
                }).catch(error => console.log(error));


            axios.post(window.location.href + 'task/' + props.id + '/info')
                .then(response => {
                    props.profileClicked([...response.data]);
                    console.log('работает счетчик');
                }).catch(error => console.log(error));
        },
    })
);

const CodeRedirect = ({handleSubmitCount, id, long, code}) => (
    <form onSubmit={event => {
        event.preventDefault();
        handleSubmitCount(id, long)
    }}>
        <button>{window.location.href + '' + code}</button>
    </form>
);

export default enhance(CodeRedirect);
