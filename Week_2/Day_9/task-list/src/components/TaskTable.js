import React from 'react'

export default function TaskTable(props) {

    return ( 
    <div>
        <table className='table mt-5'>
            <thead>
                <tr>
                    <th scope="col">Task</th>
                    <th scope="col">Complete</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody id="table-body">
                {
                props.tasks.map((task) => {
                    return (
                        <tr key={task.id}>
                             <td>{task.description}</td>
                            <td>
                                   <div onClick={() => props.onTaskCompleteToggle(task.id)}>
                                    <i
                                    className={
                                      task.complete ? 'bi bi-circle-fill' : 'bi bi-circle'
                                    }
                                  ></i>
                                </div>
                             </td>
                            <td>
                             <div
                             onClick={() => props.onDeleteBtnClicked(task.id)}>
                                <i className='bi bi-trash'></i>
                             </div>
                        </td>
                    </tr>
                 );
            })}
            </tbody>
        </table>
    </div>
);

}
