import React from 'react';
import TaskItem from "./TaskItem";
import "./Tasks.css"

const Tasks = (props) => {


    return (
        <div className="tasks">
            {props.tasks.map(task => (
                <TaskItem
                    id={task.id}
                    key={task.id}
                    title={task.title}
                    onDeleteTask={props.onDeleteTask}
                />
            ))}
        </div>
    );
};

export default Tasks;
