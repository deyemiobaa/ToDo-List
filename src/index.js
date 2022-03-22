import './style.css';
import more from './images/more.svg';
import enter from './images/enter.svg';
import refresh from './images/rotation.svg';

const tasks = [
  {
    description: 'This is my first task',
    completed: false,
    index: 0,
  },
  {
    description: 'This is my second task',
    completed: false,
    index: 1,
  },
  {
    description: 'This is my third task',
    completed: false,
    index: 2,
  },
  {
    description: 'This is my fourth task',
    completed: false,
    index: 3,
  },
];

const taskContainer = document.querySelector('.task-container');
const refreshBtn = document.querySelector('.refresh');
const enterBtn = document.querySelector('.enter');

refreshBtn.src = refresh;
enterBtn.src = enter;

const fillTasks = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    taskContainer.innerHTML
      += `
      <div class="task">
          <input id="front-end" type="checkbox" value="front-end">
          <input type="text" value="${tasks[i].description}" class="new-task">
          <img class="more" src="${more}" alt="more">
      </div>
      `;
  }
};
fillTasks();