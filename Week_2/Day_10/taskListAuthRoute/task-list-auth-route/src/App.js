import './App.css';
// import { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Bootstrap imports
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import TaskPage from './components/task/TaskPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<TaskPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/register' element={<RegisterPage />}></Route>
    </Routes>
    </BrowserRouter>


  )
}


export default App;
