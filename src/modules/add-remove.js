import {
  updateInputState, makeInputDefault,
} from './interactive-page.js';

class AddRemoveTask {
  constructor() {
    this.store = JSON.parse(localStorage.getItem('ToDoList')) || [];
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

    this.pageEvents();
    localStorage.setItem('ToDoList', JSON.stringify(this.store));
  }

  resetIndex() {
    let initialIndex = 1;
    this.store.forEach((task) => {
      task.index = initialIndex;
      initialIndex += 1;
    });
    localStorage.setItem('ToDoList', JSON.stringify(this.store));
  }

  addNewTask(task) {
    const currTask = {
      index: this.store.length + 1,
      description: task,
      completed: false,
    };
    this.store.push(currTask);
    this.newTask();
    localStorage.setItem('ToDoList', JSON.stringify(this.store));
  }

  deleteTask(index) {
    this.store = this.store.filter((task) => task.index !== index);
    this.resetIndex();
    this.newTask();
    localStorage.setItem('ToDoList', JSON.stringify(this.store));
  }

  editTask(index, value) {
    this.store[index].description = value;
    localStorage.setItem('ToDoList', JSON.stringify(this.store));
  }

  markItemAsComplete(index) {
    if (this.store[index].completed) {
      this.store[index].completed = false;
    } else {
      this.store[index].completed = true;
    }

    localStorage.setItem('ToDoList', JSON.stringify(this.store));
  }

  clearCompletedTasks() {
    this.store = this.store.filter((task) => task.completed === false);
    this.resetIndex();
    this.newTask();
  }

  clearAllTasks() {
    this.store = [];
    localStorage.setItem('ToDoList', JSON.stringify(this.store));
    this.newTask();
  }

  localStorageToWebpage() {
    if (localStorage !== null) {
      this.store = JSON.parse(localStorage.getItem('ToDoList')) || [];
      this.newTask();
    }
  }
  

  pageEvents() {
    // mark item as completed
    const checkBox = document.querySelectorAll('.check');
    checkBox.forEach((box) => {
      box.addEventListener('change', () => {
        if (box.checked) {
          box.nextElementSibling.classList.add('line');
          this.markItemAsComplete(Number(box.nextElementSibling.id) - 1, this.store);
        } else {
          box.nextElementSibling.classList.remove('line');
          this.markItemAsComplete(Number(box.nextElementSibling.id) - 1, this.store);
        }
      });
    });

    // edit an input
    const fieldInputs = document.querySelectorAll('.new-task');
    fieldInputs.forEach((field) => {
      field.addEventListener('input', () => {
        this.editTask(Number(field.id) - 1, field.value);
      });
      field.addEventListener('click', () => {
        updateInputState(field);
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

    // delete an item
    const deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.deleteTask(Number(btn.parentElement.id));
      });
    });
  }
}

export default AddRemoveTask;
