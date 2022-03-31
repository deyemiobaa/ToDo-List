import {
  deleteAllTasks, updateInputState, makeInputDefault,
} from './interactive-page.js';

const taskContainer = document.querySelector('.task-container');
const enterBtn = document.querySelector('.enter');
export const clearAllBtn = document.getElementById('clear-btn');
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

    localStorage.setItem('ToDoList', JSON.stringify(this.store));
  }

  localStorageToWebpage() {
    const store = JSON.parse(localStorage.getItem('ToDoList'));
    store.forEach((task) => {
      this.newTask(task.description);
    });
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

    // delete all tasks
    deleteAllTasks(refresh, taskContainer, this.store);
    localStorage.setItem('ToDoList', JSON.stringify(this.store));
  }
}

export default AddRemoveTask;
