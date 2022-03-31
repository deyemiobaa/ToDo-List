import './style.css';

import AddRemoveTask from './modules/add-remove.js';
import { clearAllBtn } from './modules/add-remove.js';

const newlib = new AddRemoveTask();
newlib.localStorageToWebpage();
newlib.submitNewTaskEntry();

clearAllBtn.addEventListener('click', () => {
  newlib.clearCompletedTasks()
})