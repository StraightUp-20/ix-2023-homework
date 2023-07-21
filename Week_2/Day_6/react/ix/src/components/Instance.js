import React, { useState } from 'react';
import './Instance.css';

export default function Instance(props) {
  const [count, setCount] = useState(props.count);

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }


  return <div className="card p-3 m-3">
  <h1>Name: {props.name} </h1>
  <h2>Title: {props.title} </h2>
  <div className='text-center'>
    <div> {count} </div>
    <button onClick={increment} className='btn btn-danger mt-3 me-1'>Increment</button>
    <button onClick={decrement} className='btn btn-outline-dark mt-3 ms-1'>Decrement</button>
   
    </div>
  </div>
  
}
