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
        this.newTask(task.description, task.id);
      });
      localStorage.setItem('ToDoList', JSON.stringify(this.store));
    });
  }

  deleteTask(button) {
    button.addEventListener('click', () => {
      this.store = this.store.filter(
        (tasks) => button.parentElement.id !== tasks.id,
      );
      taskContainer.innerHTML = '';
      this.store.forEach((task) => {
        this.newTask(task.description, task.id);
      });
      localStorage.setItem('ToDoList', JSON.stringify(this.store));
    });
  }

  newTask(task, id) {
    taskContainer.innerHTML
      += `
      <div class="task">
          <input type="checkbox" class="check">
          <input id="${id}" class="new-task" type="text" value="${task}">
          <span id="${id}">
            <i class="delete fa-solid fa-trash-can"></i>
          </span>
      </div>
      `;

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
        this.newTask(task.description, task.id);
      });
    }
  }

  addNewTask() {
    const index = this.store.length < 1 ? 1 : this.store.length + 1;
    const currTask = new NewTask(addNewTaskInput.value, index);
    this.store.push(currTask);
    this.newTask(currTask.description, currTask.id);
    addNewTaskInput.value = '';
  }

  submitNewTaskEntry() {
    enterBtn.addEventListener('click', () => {
      if (addNewTaskInput.value !== '') {
        this.addNewTask();
      }
    });

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
