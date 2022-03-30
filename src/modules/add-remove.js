import {
  markItemAsComplete, deleteAllTasks, updateInput, makeInputDefault,
} from './interactive-page.js';

const taskContainer = document.querySelector('.task-container');
const enterBtn = document.querySelector('.enter');
const clearAllBtn = document.getElementById('clear-btn');
const refresh = document.querySelector('.refresh');
class AddRemoveTask {
  constructor() {
    this.store = JSON.parse(localStorage.getItem('ToDoList')) || [];
  }

  resetIndex() {
    let initialIndex = 1;
    this.store.forEach((task) => {
      task.index = initialIndex;
      initialIndex += 1;
    });
    localStorage.setItem('ToDoList', JSON.stringify(this.store));
  }

  clearCompletedTasks(button) {
    button.addEventListener('click', () => {
      this.store = this.store.filter((task) => task.completed === false);
      taskContainer.innerHTML = '';
      this.store.forEach((task) => {
        this.newTask(task.description, task.index, task);
      });
      localStorage.setItem('ToDoList', JSON.stringify(this.store));
    });
  }

  deleteTask(index) {
    this.store = this.store.filter((task) => task.index !== index);
    this.resetIndex();
    this.newTask();
    localStorage.setItem('ToDoList', JSON.stringify(this.store));
  }

  newTask() {
    const taskContainer = document.querySelector('.task-container');
    taskContainer.innerHTML = '';
    this.store.forEach((task) => {
      if (task.completed) {
        taskContainer.innerHTML
          += `
      <div class="task">
          <input type="checkbox" class="check" checked>
          <input id="${task.index}" class="new-task line" type="text" value="${task.description}">
          <span id="${task.index}">
            <i class="delete fa-solid fa-trash-can"></i>
          </span>
      </div>
      `;
      } else {
        taskContainer.innerHTML
          += `
      <div class="task">
          <input type="checkbox" class="check">
          <input id="${task.index}" class="new-task" type="text" value="${task.description}">
          <span id="${task.index}">
            <i class="delete fa-solid fa-trash-can"></i>
          </span>
      </div>
      `;
      }
    });

    localStorage.setItem('ToDoList', JSON.stringify(this.store));

    // mark item as completed
    const checkBox = document.querySelectorAll('.check');
    markItemAsComplete(checkBox, this.store);

    // delete an item
    const deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        taskContainer.innerHTML = '';
        this.deleteTask(Number(btn.parentElement.id));
      });
    });

    // edit an input
    const fieldInputs = document.querySelectorAll('.new-task');
    fieldInputs.forEach((field) => {
      field.addEventListener('click', () => {
        updateInput(field, this.store);
      });
      field.addEventListener('blur', () => {
        makeInputDefault(field);
      });
      field.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
          makeInputDefault(field);
        }
      });
    });
  }

  localStorageToWebpage() {
    if (localStorage !== null) {
      const store = JSON.parse(localStorage.getItem('ToDoList'));
      store.forEach((task) => {
        this.newTask(task.description, task.index, task);
      });
    }
  }

  addNewTask(task) {
    const currTask = {
      index: this.store.length < 1 ? 1 : this.store.length + 1,
      description: task,
      completed: false,
    };
    this.store.push(currTask);
    this.newTask();
    localStorage.setItem('ToDoList', JSON.stringify(this.store));
  }

  submitNewTaskEntry() {
    const addNewTaskInput = document.getElementById('add-new-task');
    const errormsg = document.getElementById('error-msg');

    enterBtn.addEventListener('click', () => {
      if (addNewTaskInput.value === '') {
        errormsg.style.visibility = 'visible';
        setTimeout(() => {
          errormsg.style.visibility = 'hidden';
        }, 2000);
      } else {
        this.addNewTask(addNewTaskInput.value);
        addNewTaskInput.value = '';
      }
    });

    addNewTaskInput.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        if (addNewTaskInput.value === '') {
          errormsg.style.visibility = 'visible';
          setTimeout(() => {
            errormsg.style.visibility = 'hidden';
          }, 2000);
        } else {
          this.addNewTask(addNewTaskInput.value);
          addNewTaskInput.value = '';
        }
      }
    });

    this.clearCompletedTasks(clearAllBtn);
    localStorage.setItem('ToDoList', JSON.stringify(this.store));
    this.localStorageToWebpage();
    // delete all tasks
    deleteAllTasks(refresh, taskContainer);
  }
}

export default AddRemoveTask;
