import NewTask from './createTask.js';
import {
  markItemAsComplete, deleteAllTasks, updateInput, makeInputDefault,
} from './interactive-page.js';

const taskContainer = document.querySelector('.task-container');
const addNewTaskInput = document.getElementById('add-new-task');
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

  deleteTask(button) {
    button.addEventListener('click', () => {
      this.store = this.store.filter(
        (tasks) => Number(button.parentElement.id) !== tasks.index,
      );
      taskContainer.innerHTML = '';
      this.store.forEach((task) => {
        this.newTask(task.description, task.index, task);
      });
      localStorage.setItem('ToDoList', JSON.stringify(this.store));
    });
  }

  newTask(task, index, taskObject) {
    if (taskObject.completed) {
      taskContainer.innerHTML
        += `
      <div class="task">
          <input type="checkbox" class="check" checked>
          <input id="${index}" class="new-task line" type="text" value="${task}">
          <span id="${index}">
            <i class="delete fa-solid fa-trash-can"></i>
          </span>
      </div>
      `
    } else {
      taskContainer.innerHTML
        += `
      <div class="task">
          <input type="checkbox" class="check">
          <input id="${index}" class="new-task" type="text" value="${task}">
          <span id="${index}">
            <i class="delete fa-solid fa-trash-can"></i>
          </span>
      </div>
      `
    }

    // mark item as completed
    const checkBox = document.querySelectorAll('.check');
    markItemAsComplete(checkBox, this.store);

    const deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach((btn) => {
      this.deleteTask(btn);
      this.resetIndex();
    });
    localStorage.setItem('ToDoList', JSON.stringify(this.store));

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

  addNewTask() {
    const errormsg = document.getElementById('error-msg');
    if (addNewTaskInput.value === '') {
      errormsg.style.visibility = 'visible';
      setTimeout(() => {
        errormsg.style.visibility = 'hidden';
      }, 2000);
    } else {
      const index = this.store.length < 1 ? 1 : this.store.length + 1;
      const currTask = new NewTask(addNewTaskInput.value, index);
      this.store.push(currTask);
      this.newTask(currTask.description, currTask.index, currTask);
      addNewTaskInput.value = '';
    }
  }

  submitNewTaskEntry() {
    enterBtn.addEventListener('click', () => {
      this.addNewTask();
    }
    );

    addNewTaskInput.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        this.addNewTask();
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
