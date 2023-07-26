import './App.css';
import { useState, useEffect } from 'react';

// Model imports
import { Task } from './models/Task';

// Bootstrap imports
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Component imports
import TaskForm from './components/TaskForm';
import TaskTable from './components/TaskTable';

// Service imports
import TaskService from './services/TaskService'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (!tasks.length) {
      onInitalLoad()
  }
 }, [tasks]);

 async function onInitalLoad() {
  try {
    const tasks = await TaskService.fetchTasks();
    setTasks(tasks)
  } catch (err) {
    console.log(err);
  }
 }

  async function onTasksCreate(description) {
      const task = await TaskService.createTask(new Task(null, description, false))
      // setTaskToEdit(null);
      setTasks([...tasks, task])
      // saveTasksToLocalStorage();
    }

    async function onTaskRemove(taskId) {
      await TaskService.deleteTask(taskId);
      setTasks(tasks.filter((task) => task.id !== taskId));
    }

    async function onTaskCompleteToggle(taskId) {
      const taskToToggle = tasks.find((task) => task.id === taskId);
      taskToToggle.complete = !taskToToggle.complete;

     const updatedTask = await TaskService.updateTask(taskToToggle);

     setTasks(
      tasks.map((task) => {
        return task.id === taskId ? updatedTask : task;
      })
     )
    }


  return (
    <div className="text-center m-5">
      <div className='card p-4'>
        <TaskForm onTasksCreate= {onTasksCreate}/>
        <TaskTable tasks={tasks} onTaskRemove={onTaskRemove} 
        onTaskCompleteToggle={onTaskCompleteToggle}/>
        </div>
      </div>
  );
}


export default App;
