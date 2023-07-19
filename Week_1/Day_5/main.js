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

    // this.tasks.value = '';
  }

  renderTaskTable() {
    this.tableBody.innerHTML = [];
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];

      // create the table row element

      // check day 5 library book for the rest
      const tr = this.createTaskTableRow(task);
      this.tableBody.appendChild(tr);
    }
  }

  createTaskTableRow(task) {
    const tr = document.createElement('tr');

    const tdTask = document.createElement('td');
    const tdComplete = document.createElement('td');
    const tdActions = document.createElement('td');

    return tr;
  }
}
const ui = new UI();
