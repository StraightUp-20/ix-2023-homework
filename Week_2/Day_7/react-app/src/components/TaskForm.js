import React, {useState} from 'react'
import { Task } from '../models/table';

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

     function clearInputs() {
        setDescription('');
     }

    function isValid() {
        return description !== ''
    }
    return (
        <div>
            <h1> Task List </h1>
            <hr />
            <div>Our firebase Task List</div>

            <form id="form" onSubmit={onTaskFormSubmit}>
                <div class="input-group mt-4">
                    <input id="input-task" type="text" class="form-control" placeholder="Enter Task" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <button id="add-button" class="btn btn-outline-dark" type="submit">+</button>
                </div>
            </form>

        </div>
    )
}
