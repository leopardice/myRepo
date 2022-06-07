import React, {useState} from 'react';
import "./TaskForm.css"

const TaskForm = (props) => {
    const [enteredTask, setEnteredTask] = useState('');

    const taskChangeHandler = (event) => {
      setEnteredTask(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const taskData = {
            id: Math.random().toString(),
            title: enteredTask,
        }

        props.onSaveTask(taskData);

        setEnteredTask('');
    }


    return (
        <form onSubmit={submitHandler}>
        <div className="task-title-control">
            <label>New Task</label>
            <input type="text" value={enteredTask} onChange={taskChangeHandler}/>
            <button>Add Task</button>
        </div>
        </form>
    );
};

export default TaskForm;
