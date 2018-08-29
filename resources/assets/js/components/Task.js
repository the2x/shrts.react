import React from 'react';
import MomentTimer from "./Moment";
import RemoveTask from "./RemoveTask";
import Cheater from "./Criminal";
import Increment from "./Increment";
import CodeRedirect from "./CodeRedirect";
import CountNumber from "./CountNumber";
import CreateTask from "./CreateTask";
import Profile from "./Profile";
import Long from "./Long";

import {compose, withState, lifecycle} from 'recompose';

const enhance = compose(
    withState('task', 'uploadTask', []),
    lifecycle({
        componentDidMount() {
            axios.get('/task')
                .then(response => {
                    this.props.uploadTask([...response.data]);
                }).catch(error => console.log(error));
        }
    })
);

const Task = ({task}) => (
    <div className="task_wrapper">
        <CreateTask/>
        {
            task.map((result, index) => {
                return <ul className="cols" key={index}>
                    <li>
                        <Increment id={result.id}/>
                    </li>
                    <li>
                        <CodeRedirect
                            id={result.id}
                            long={result.long}
                            code={result.code}/>
                    </li>
                    <li>
                        <Long long={result.long}/>
                    </li>
                    <li>
                        <CountNumber count={result.count}/>
                    </li>
                    <li>
                        <Cheater
                            id={result.id}/>

                    </li>
                    <li>
                        <RemoveTask
                            id={result.id}/>
                    </li>
                    <li>
                        <MomentTimer time={result.created_at}/>
                    </li>
                    <li>
                        <Profile
                            index={index}
                            id={result.id}/>

                    </li>
                </ul>
            })
        }
    </div>
);

export default enhance(Task);