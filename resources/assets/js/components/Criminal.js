import React, {Fragment} from 'react'
import PropTypes from 'prop-types';
import {compose, setPropTypes, withHandlers, withState, lifecycle, shouldUpdate} from 'recompose';

const enhance = compose(
    setPropTypes({handleCheater: PropTypes.func, id: PropTypes.number,}),
    withState('task', 'setCheater', []),
    withHandlers({
        handleCheater: props => () => {
            axios.post(window.location.href + 'task/' + props.id, {id: props.id})
                .then(response => {
                    props.setCheater([...response.data]);
                }).catch(error => console.log(error))
        },
    }),

    lifecycle({
        componentDidMount() {
            console.log(1)
        },

        componentWillReceiveProps(nextProps) {
            if (this.props.task !== nextProps.task) {
                console.log(2)
            }
        }
    })
);

const Cheater = ({handleCheater, id}) => (
    <Fragment>
        <form onSubmit={event => {
            event.preventDefault();
            handleCheater(id);
        }}>
            <button>Cheater</button>
        </form>
    </Fragment>
);

export default enhance(Cheater);
