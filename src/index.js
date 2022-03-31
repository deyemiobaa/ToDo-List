import './style.css';
import AddRemoveTask from './modules/add-remove.js';

const refresh = document.querySelector('.refresh');
const clearCompleteBtn = document.getElementById('clear-btn');
const newlib = new AddRemoveTask();

newlib.localStorageToWebpage();

clearCompleteBtn.addEventListener('click', () => {
  newlib.clearCompletedTasks();
});

refresh.addEventListener('click', () => {
  newlib.clearAllTasks();
});

function submitNewTaskEntry() {
  const addNewTaskInput = document.getElementById('add-new-task');
  const errormsg = document.getElementById('error-msg');
  const enterBtn = document.querySelector('.enter');

  enterBtn.addEventListener('click', () => {
    if (addNewTaskInput.value === '') {
      errormsg.style.visibility = 'visible';
      setTimeout(() => {
        errormsg.style.visibility = 'hidden';
      }, 2000);
    } else {
      newlib.addNewTask(addNewTaskInput.value);
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
        newlib.addNewTask(addNewTaskInput.value);
        addNewTaskInput.value = '';
      }
    }
  });

  localStorage.setItem('ToDoList', JSON.stringify(newlib.store));
}
submitNewTaskEntry();