import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {compose, setPropTypes, withHandlers, withState} from 'recompose';

const enhance = compose(
    setPropTypes({
        index: PropTypes.number,
        toggleClass: PropTypes.func,
        getProfileListInformation: PropTypes.func,
        active: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        user: PropTypes.array,
        id: PropTypes.number,
    }),
    withState('active', 'changeActive', ''),
    withState('user', 'showUser', []),
    withHandlers({
        toggleClass: props => () => {
            if (parseInt(props.active) === props.index) {
                props.changeActive('');
            } else {
                props.changeActive(props.index);
            }
        },

        getProfileListInformation: props => () => {
            axios.get(window.location.href + 'task/info')
                .then(response => {
                    props.showUser([response.data]);

                    console.log(props)
                }).catch(error => console.log(error));
        }
    })
);

const Profile = ({index, toggleClass, getProfileListInformation, active, user, id}) => (

    <Fragment>
        <button key={index} onClick={() => {
            toggleClass(index);
            getProfileListInformation(index)
        }}>
            Private
        </button>

        <div className={active === index ? 'show_hide_block' : 'hide_block'}>
            <ul>
                {
                    user.map((profile, index) => {
                        if (profile.task_id === id) {
                            return <li key={index}>
                                <small>{profile.ip} — {profile.browser}</small>
                            </li>
                        }
                    })
                }
            </ul>
        </div>
    </Fragment>
);

export default enhance(Profile);
