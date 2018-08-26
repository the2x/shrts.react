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

class Task extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            long: '',
            task: [],
            profile: [],
            active: '',
        };

        this.createTask = this.createTask.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitCount = this.handleSubmitCount.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.getProfileListInformation = this.getProfileListInformation.bind(this);
        this.postProfileClicked = this.postProfileClicked.bind(this);
        this.handleCheater = this.handleCheater.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
    }


    componentDidMount() {
        axios.get('/task')
            .then(response => {
                this.setState({
                    task: [...response.data]
                });
            }).catch(error => console.log(error));
    }


    createTask(event) {
        this.setState({
            long: event.target.value
        });
    }


    handleSubmit(event) {
        event.preventDefault();

        const task = {
            long: this.state.long,
        };

        axios.post(window.location.href + 'create', task)
            .then(response => {
                this.setState({
                    task: [...this.state.task, response.data]
                });
            }).catch(error => console.log(error));
    }


    handleSubmitCount(taskId, long) {
        axios.post(window.location.href + 'task/' + taskId, {params: {id: `${taskId}`}})
            .then(response => {
                this.setState({
                    task: [...response.data]
                });

                window.open(long, '_blank')

            }).catch(error => console.log(error));


        //Method post new profile after click
        this.postProfileClicked(taskId);
    }


    postProfileClicked(taskId) {
        axios.post(window.location.href + 'task/' + taskId + '/info')
            .then(response => {
                this.setState({
                    profile: [...response.data]
                })
            }).catch(error => console.log(error));
    }


    handleCheater(taskId) {
        axios.post(window.location.href + 'task/' + taskId, taskId)
            .then(response => {
                this.setState({
                    task: [...response.data]
                });
            }).catch(error => console.log(error))
    }


    handleDeleteTask(taskId) {
        axios.post(window.location.href + 'task/' + taskId, {params: {id: `${taskId}`}, _method: 'delete'})
            .then(response => {
                this.setState({
                    task: [...response.data]
                })
            })
            .catch(error => console.log(error));
    }


    getProfileListInformation(index) {
        axios.get(window.location.href + 'task/info')
            .then(response => {
                this.setState({
                    profile: [...response.data]
                });
            })
            .catch(error => console.log(error));
    }


    toggleClass(index) {
        if (parseInt(this.state.active) === index) {
            this.setState({
                active: '',
            });
        } else {
            this.setState({
                active: index,
            });
        }
    };


    render() {
        return (
            <div className="task_wrapper">
                <CreateTask
                    handleSubmit={this.handleSubmit}
                    createTask={this.createTask}/>
                {
                    this.state.task.map((result, index) => {
                        return <ul className="cols" key={index}>
                            <li>
                                <Increment id={result.id}/>
                            </li>
                            <li>
                                <CodeRedirect
                                    handleSubmitCount={this.handleSubmitCount}
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
                                    handleCheater={this.handleCheater}
                                    id={result.id}/>

                            </li>
                            <li>
                                <RemoveTask
                                    handleDeleteTask={this.handleDeleteTask}
                                    id={result.id}/>
                            </li>
                            <li>
                                <MomentTimer time={result.created_at}/>
                            </li>
                            <li>
                                <Profile
                                    index={index}
                                    toggleClass={this.toggleClass}
                                    getProfileListInformation={this.getProfileListInformation}
                                    active={this.state.active}
                                    user={this.state.profile}
                                    id={result.id}/>

                            </li>
                        </ul>
                    })
                }
            </div>
        )
    }
}

export default Task;