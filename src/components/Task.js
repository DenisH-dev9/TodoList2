import React from 'react';


const Task = ({task, ...props}) => {

    const ActionBtn = () => (
    <div className="action-btn">
        {!task.done ? (
    <span onClick={props.doneTask}>✔</span> 
    ) : (
    <span onClick={props.deleteTask}>❌</span>
    )}
    </div>
    );

    const className = 'task ' + (task.done ? 'task-done' : '');

    return (
        <div className={className}>
            <p>{task.title}</p>
            <ActionBtn></ActionBtn>
        </div>
    );
};

export default Task;