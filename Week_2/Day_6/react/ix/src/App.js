import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import Instance from './components/Instance';

import InstanceTwo from './components/InstanceTwo';
import InstanceThree from './components/InstanceThree';


function App() {
  return (
    <div className='text-center'>
      <Instance name="Leonardo" title="SWE" count={0}/>
      <InstanceTwo currentlyAt="In Lisbon, Portugal"/>
      <InstanceThree DOB="Massacheusetts" />

    
    </div>
  );
}

export default App;
