class Task {
  constructor(id, taskName, complete) {
    this.id = id;
    this.taskName = taskName;
    this.complete = complete;
  }
}

class UI {
  constructor() {
    this.tableBody = document.getElementById('table-body');
    this.form = document.getElementById('form');
    this.taskInput = document.getElementById('input-task');

    this.form.addEventListener('submit', (e) => this.formIsClicked(e));

    this.tasks = [];
  }

  formIsClicked(e) {
    e.preventDefault();


    // validation check to see the input has a value
    if (this.taskInput.value == '') {
      alert('Please enter a value');
      return;
    }

    const id = new Date().getTime();
    const task = new Task(id, this.taskInput.value, false);
    this.tasks.push(task);

    this.renderTaskTable();

    this.tasks.value = '';

  }

  renderTaskTable() {
    this.tableBody.innerHTML = [];
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];

      const tr = this.createTaskTableRow(task);
      this.tableBody.appendChild(tr);
    }
  }

  createTaskTableRow(task) {
    const tr = document.createElement('tr');

    const tdTask = document.createElement('td');
    const tdComplete = document.createElement('td');
    const tdActions = document.createElement('td');

    tdTask.innerHTML = task.taskName;
    tdComplete.innerHTML = task.complete;
    tdActions.innerHTML = task.id;

    const actionButtons = this.createActionButtons();
    tdActions.appendChild(actionButtons[0])
    tdActions.appendChild(actionButtons[1])

    tr.appendChild(tdTask);
    tr.appendChild(tdComplete);
    tr.appendChild(tdActions);

    return tr;

  }
  createActionButtons(task) {
      const deleteButton = document.createElement('button');
      const editButton = document.createElement('button');

      deleteButton.setAttribute("class", "btn btn-danger btn-sm me-1");
      deleteButton.innerHTML = "Delete";
      deleteButton.addEventListener("click", () => {
        // Call deletefunction()
      })

      editButton.setAttribute("class", "btn btn-warning btn-sm ms-1");
      editButton.innerHTML = "Edit"
      editButton.addEventListener("click", () => {
        // Call editfunction()
  })

  return [deleteButton, editButton]
}

  // deleteFunction() {

  // }

  // editFunction() {

  // }
}
const ui = new UI();
