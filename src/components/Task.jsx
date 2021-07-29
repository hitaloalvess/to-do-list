import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg'
import { useHistory } from 'react-router-dom';

import './Task.css'
const Task = ({task, handleRemoveTask, handleTaskClick}) => {

    const history = useHistory();

    const handleTaskInfoView = () => {
        history.push(`/${task.title}`)    
    }

    return (  
        <div className="task-container" style={task.completed ? {borderLeft:'6px solid chartreuse'} : {}}>
            <div className="title-task-container" onClick={ () => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className="buttons-task-container">
                <button className='task-button-info' onClick={handleTaskInfoView}>
                    <CgInfo />
                </button>
                <button className='task-button-close' onClick={() => handleRemoveTask(task.id)}>
                    <CgClose />
                </button>
            </div>
        </div>
    );
}
 
export default Task;