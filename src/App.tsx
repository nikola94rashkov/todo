import React, { useState, FC } from 'react';
import './App.css';
import Form from "./components/Form/Form"; 
import List from './components/List/List';
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addNewTask = (newItem: ITask):void => {
      setTasks([...tasks, newItem])
  }

  return (
    <div className="App">
        <header>
          <Form addNewTask={addNewTask} />
        </header>

        <div className="list">
          {tasks.map((task: ITask, key: number) => {
            return <List key={key} task={task} />
          })}
        </div>
    </div>
  );
}

export default App;
