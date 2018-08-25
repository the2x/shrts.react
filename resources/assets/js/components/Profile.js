import React from 'react';
import PropTypes from 'prop-types';


const Profile = ({index, toggleClass, getProfileListInformation, active, user, id}) => (
    <div>
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
    </div>
);


Profile.propTypes = {
    index: PropTypes.number,
    toggleClass: PropTypes.func,
    getProfileListInformation: PropTypes.func,
    active: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    user: PropTypes.array,
    id: PropTypes.number,
};

export default Profile;
