import React from 'react';

import Task from './Task';

const Tasks = ({tasks, handleRemoveTask}) => {
    return (
        <>
            {tasks.map(task => <Task key={task.id} handleRemoveTask={handleRemoveTask} task={task}/>)}
        </>
    );
}
 
export default Tasks;