import NewTask from './createTask.js';
import discard from '../images/bin.svg';
import {
  markItemAsComplete, deleteAllTasks,
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
  }

  clearCompletedTasks(button) {
    button.addEventListener('click', () => {
      this.store = this.store.filter((task) => task.completed === false);
      taskContainer.innerHTML = '';
      this.store.forEach((task) => {
        this.newTask(task.description, task.id);
      });
      localStorage.setItem('ToDoList', JSON.stringify(this.store));
    })
  }

  deleteTask(button) {
    button.addEventListener('click', () => {
      this.store = this.store.filter(
        (tasks) => button.id !== tasks.id,
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
          <img id="${id}" class="delete" src="${discard}" alt="more">
      </div>
      `;

    const deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach((btn) => {
      this.deleteTask(btn);
      this.resetIndex();
    });
    localStorage.setItem('ToDoList', JSON.stringify(this.store));

    // mark item as completed
    const checkBox = document.querySelectorAll('.check');
    markItemAsComplete(checkBox, this.store);

    // clear all completed items

    // clearCompleteItems(clearAllBtn, this.store, taskContainer, this.newTask);
  }

  localStorageToWebpage() {
    if (localStorage !== null) {
      const store = JSON.parse(localStorage.getItem('ToDoList'));
      store.forEach((task) => {
        this.newTask(task.description, task.id);
      });
    }
  }

  submitNewTaskEntry() {
    enterBtn.addEventListener('click', () => {
      if (addNewTaskInput.value === '') {
        return;
      }
      const index = this.store.length < 1 ? 1 : this.store.length + 1;
      const currTask = new NewTask(addNewTaskInput.value, index);
      this.store.push(currTask);
      this.newTask(currTask.description, currTask.id);
      addNewTaskInput.value = '';
    });
    this.clearCompletedTasks(clearAllBtn)
    localStorage.setItem('ToDoList', JSON.stringify(this.store));
    this.localStorageToWebpage();
    // delete all tasks
    deleteAllTasks(refresh, taskContainer);
  }
}

export default AddRemoveTask;

