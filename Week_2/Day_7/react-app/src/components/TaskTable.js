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
                        <tr key={task.description}>
                             <td>{task.description}</td>
                            <td>
                                <input
                                className="form-check-input"
                                type="radio"
                                name="radioBox"
                                id="radioBox"
                                ></input>
                             </td>
                            <td>
                            <button
                                type="button"
                                className="bi bi-trash" viewBox="0 0 16 16" fill="currentColor" width="16" height="16"
                                onClick={() => props.onDeleteBtnClicked(task)}
                            ></button>
                        </td>
                    </tr>
                 );
            })}
            </tbody>
        </table>
    </div>
);

}
