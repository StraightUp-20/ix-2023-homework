import React from 'react'

export default function TaskTable(props) {
    console.log(props.tasks)
  return <div>
    <table className='table mt-5'>
        <thead>
            <tr>
                <th>Task</th>
                <th>Complete</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="table-body"></tbody>
    </table>
      
    </div>
  
}
