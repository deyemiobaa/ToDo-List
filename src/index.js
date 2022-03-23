import './style.css';
import enter from './images/enter.svg';
import refresh from './images/rotation.svg';
import AddRemoveTask from './add-remove.js';

const refreshBtn = document.querySelector('.refresh');
const enterBtn = document.querySelector('.enter');

refreshBtn.src = refresh;
enterBtn.src = enter;

const newlib = new AddRemoveTask();

newlib.submitNewTaskEntry();
