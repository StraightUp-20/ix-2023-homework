import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './components/TaskForm';
import TaskTable from './components/TaskTable';


function App() {
  const [tasks, setTasks] = useState([])

  function onTasksCreated(task) {

    setTasks([...tasks, task])
  }

  return (
    <div className="text-center m-5">
      <div className='card p-4'>
        <TaskForm onTasksCreated= {onTasksCreated}/>
        <TaskTable tasks={tasks} />
        </div>
      </div>
  );
}

export default App;
