import './App.css';
import { useState, useEffect } from 'react';
import { Task } from './models/table';


import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './components/TaskForm';
import TaskTable from './components/TaskTable';

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    loadTasksFromLocalStorage()
  },)

  function onTasksCreated(task) {

    setTasks([...tasks, task])
    saveTasksToLocalStorage();
    }

    function onDeleteBtnClicked(task) {
      setTasks(tasks.filter((x) => x.description !== task.description));
    }

    function saveTasksToLocalStorage() {
      const json = JSON.stringify(tasks);
      localStorage.setItem('tasks', json)
    }

    function loadTasksFromLocalStorage() {
      const json = localStorage.getItem('tasks');
      if(json) {
        const taskArr = JSON.parse(json)
        for (let i = 0; i < taskArr.length; i++ ) {
          setTasks([...tasks, Task.fromJSON(taskArr[i])])
        }
      }
    }

  return (
    <div className="text-center m-5">
      <div className='card p-4'>
        <TaskForm onTasksCreated= {onTasksCreated}/>
        <TaskTable tasks={tasks} onDeleteBtnClicked={onDeleteBtnClicked}/>
        </div>
      </div>
  );
}


export default App;
