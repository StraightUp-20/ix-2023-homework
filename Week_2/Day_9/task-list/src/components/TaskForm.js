import React, {useState} from 'react'
import {Task} from '../models/Task'

export default function TaskForm(props) {
    const [description, setDescription] = useState('')

    function onTaskFormSubmit(e) {
        e.preventDefault();

        if(!isValid) {
            return;
        }

        let task = new Task(description);
        props.onTasksCreated(task)
        clearInputs();

     }

     function isValid() {
        return description !== ''
    }

     function clearInputs() {
        setDescription('');
     }

    return (
        <div>
            <h1> Task List </h1>
            <hr />
            <div>Our firebase Task List</div>

            <form id="form" onSubmit={onTaskFormSubmit}>
                <div className="input-group mt-4">
                    <input id="input-task" type="text" className="form-control" placeholder="Enter Task" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <button id="add-button" className="btn btn-outline-dark" type="submit">+</button>
                </div>
            </form>

        </div>
    )
}
