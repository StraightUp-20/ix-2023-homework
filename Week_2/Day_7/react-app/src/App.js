import './App.css';
import { useState, useEffect } from 'react';
import { Task } from './models/table';

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './components/TaskForm';
import TaskTable from './components/TaskTable';

function App() {
  const [tasks, setTasks] = useState([])
  // const [taskToEdit, setTaskToEdit] = useState(null);

    // not applied. // Local storage is not applied yet
  useEffect(() => {
    loadTasksFromLocalStorage()
  },)

  // In the case of an empty arraym the function only
  // fires the first time the component initializes
  // If we put a variable in the [], anytime the variables changes
  // the function fires

  function onTasksCreated(task) {

    setTasks([...tasks, task])
    // not Applied
    saveTasksToLocalStorage();
    }

    function onDeleteBtnClicked(task) {
      setTasks(tasks.filter((x) => x.description !== task.description));
    }
    // Not applied
    function saveTasksToLocalStorage() {
      const json = JSON.stringify(tasks);
      localStorage.setItem('tasks', json)
    }
    // Not applied
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


// useEffect(() => {
//   if (!tasks.length) {
//   loadTasksFromLocalStorage();
// };

// useEffect(() => {
//   // saveTasksToLocalStorage();
// }, [tasks]);

// // In the case of an empty arraym the function only
// // fires the first time the component initializes
// // If we put a variable in the [], anytime the variables changes
// // the function fires

// async function onTasksCreated(description) {
//     const task = await TaskService.createTask(new Task(null, description, false))
//     // setTaskToEdit(null);
//     setTasks([...tasks, task])
//     // saveTasksToLocalStorage();
//   }

//   function onDeleteBtnClicked(task) {
//     setTasks(tasks.filter((x) => x.id !== task.id));
//   }
//   // Not applied
//   // function saveTasksToLocalStorage() {
//   //   const json = JSON.stringify(tasks);
//   //   localStorage.setItem('tasks', json)
//   // }
//   // // Not applied
//   // function loadTasksFromLocalStorage() {
//   //   const json = localStorage.getItem('tasks');
//   //   if(json) {
//   //     const taskArr = JSON.parse(json)
//   //     for (let i = 0; i < taskArr.length; i++ ) {
//   //       setTasks([...tasks, Task.fromJSON(taskArr[i])])
//   //     }
//   //   }
//   // }

//   function onTaskCompleteToggle(taskId) {
//     const taskToToggle = tasks.find((task) => task.id === taskId);
//     taskToToggle.complete = !taskToToggle.complete;
//   }
// return (
//   <div className="text-center m-5">
//     <div className='card p-4'>
//       <TaskForm onTasksCreated= {onTasksCreated} taskToEdit={taskToEdit}/>
//       <TaskTable tasks={tasks} onDeleteBtnClicked={onDeleteBtnClicked} 
//       onTaskCompleteToggle={onTaskCompleteToggle}/>
//       </div>
//     </div>
// );
// }


// export default App;
