import React from 'react';
import {CgClose} from 'react-icons/cg'

import './Task.css'
const Task = ({task, handleRemoveTask}) => {
    return (  
        <div className="task-container" style={task.completed ? {borderLeft:'6px solid chartreuse'} : {}}>
            <div className="title-task-container">
                {task.title}
            </div>
            <div className="buttons-task-container">
                <button className='task-button-close' onClick={() => handleRemoveTask(task.id)}>
                    <CgClose />
                </button>
            </div>
        </div>
    );
}
 
export default Task;