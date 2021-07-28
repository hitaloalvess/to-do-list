import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import Tasks from './components/Tasks';

import './App.css'
import AddTasks from './components/AddTasks';

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id:1,
      title:'Estudar programação',
      completed:false
    },
    {
      id:2,
      title:'Ler um livro',
      completed:true
    }
  ])

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

  return ( 
    <main className="container">
      <Router>
          <Header title="Tela inicial" />
          <Route path="/" exact render={() => (
            <>
                <AddTasks handleTaskAddition={handleTaskAddition} />
                <Tasks tasks={tasks} handleRemoveTask={handleRemoveTask} />
            </>
          )}>
          </Route>
      </Router>
    </main>
   );
}
 
export default App;
