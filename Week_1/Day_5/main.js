class Task {
    constructor(taskName) {
        this.taskName = taskName
    } 

}


class UI {
    constructor() {
        this.tableBody = document.getElementById('table-body');
        this.form = document.getElementById('form')

        this.form.addEventListener('submit', (e) => this.formIsClicked(e));

        this.tasks = []
    }

    formIsClicked(e) {
        e.preventDefault();
        
        if (this.taskName.value == " ") {
            return; 
        }

    const task = new Task(this.taskName.value)
    this.tasks.push(task)
    // console.log(task)
    
    this.tasks.value = ""

    }
    // renderTaskTable() {
    //     this.tableBody.innerHTML = []
    //     for (let i = 0; i < tasks.length; i++) {
    //         const tasks = tasks[i]

    //     const tr = document.createTaskTableRow();
    //     this.tableBody.appendChild(tr);
            
    //     }
    // }
}
    const ui = new UI();

//     renderCustomers() {
//     this.tableBody.innerHTML = [];

//     for (let i = 0; i < listArray.length; i++) {
//     const tr = document.createElement('tr');

//     let task = document.createElement("td");

//     task.innerHTML = listArray[i].task;

//     tr.appendChild(task);

//     this.tableBody.appendChild(tr);

//         }
//     }
// }

// let listArray = [];
// listArray.push(List);

// const ui = new UI();
// ui.renderCustomers();

   