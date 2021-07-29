import React from 'react';

import Task from './Task';

const Tasks = ({tasks, handleRemoveTask, handleTaskClick}) => {
    return (
        <>
            {tasks.map(task => <Task key={task.id} handleTaskClick={handleTaskClick} handleRemoveTask={handleRemoveTask} task={task}/>)}
        </>
    );
}
 
export default Tasks;