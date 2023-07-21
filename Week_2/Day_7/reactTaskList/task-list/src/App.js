import TaskForm from './components/TaskForm';
import TaskTable from './components/TaskTable'
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="text-center display-3">
    <TaskTable />
    <TaskForm />
    </div>
  );
}

export default App;
