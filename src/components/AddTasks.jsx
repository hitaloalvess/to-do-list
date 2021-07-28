import React, { useState } from 'react';

import Button from './Button';

import './AddTasks.css'
const AddTasks = ({handleTaskAddition}) => {

    const [inputData, setInputData] = useState('')

    const handleInputCapture = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTask = () => {
        handleTaskAddition(inputData)
        setInputData('')
    }
    return ( 
        <div className='add-tasks-container'>
            <input type="text" onChange={handleInputCapture} value={inputData}/>
            <Button onClick={handleAddTask}>Adicionar</Button>
        </div>
    );
}
 
export default AddTasks;