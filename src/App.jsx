import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import Header from './components/Header';
import Tasks from './components/Tasks';

import './App.css'
import AddTasks from './components/AddTasks';
import TaskDetails from './components/TaskDetails';

const App = () => {

  const [tasks, setTasks] = useState([])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return{...task, completed: !task.completed}

      return task;
    });

    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks,{
      id:uuidv4(),
      title:taskTitle,
      completed:false
    }];

    setTasks(newTasks);
  }

  const handleRemoveTask = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);

      setTasks(newTasks);
  }

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=8');
      setTasks(data);
    }

    fetchTasks();
  },[])

  return ( 
    <main className="container">
      <Router>
          <Header title="Tela inicial" />
          <Route path="/" exact render={() => (
            <>
                <AddTasks handleTaskAddition={handleTaskAddition} />
                <Tasks tasks={tasks} handleRemoveTask={handleRemoveTask} handleTaskClick={handleTaskClick}/>
            </>
          )}>
          </Route>
          <Route path='/:taskTitle' exact component={TaskDetails}>

          </Route>
      </Router>
    </main>
   );
}
 
export default App;
