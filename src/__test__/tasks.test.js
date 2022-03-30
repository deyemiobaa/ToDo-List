/**
 * @jest-environment jsdom
 */

import AddRemoveTask from '../modules/add-remove.js';

document.body.innerHTML = `
<div class="todolist">
      <div class="list-header">
        <h1>Todays' ToDo</h1>
        <span class="refresh"><i class="fa-solid fa-rotate"></i></span>
      </div>
      <div class="add-new-task">
        <input id="add-new-task" type="text" placeholder="Add to your list...">
        <span class="enter"><i class="fa-solid fa-right-to-bracket"></i></span>
      </div>
      <div class="task-container">
      </div>
      <button type="button" id="clear-btn">Clear all completed</button>
    </div>
`;
describe('add and delete', () => {
  test('add task', () => {
    // add two new tasks using the addNewTask method
    const AddTask = new AddRemoveTask();
    AddTask.addNewTask('test');
    AddTask.addNewTask('test2');

    // check if the array has two tasks
    expect(AddTask.store.length).toBe(2);

    // check if the inner html contains the two tasks
    expect(document.querySelector('.task-container').children.length).toBe(2);

    // check if the local storage is not empty
    expect(localStorage).not.toBe(null);
  });

  test('delete task', () => {
    const removeTask = new AddRemoveTask();
    // add three extra tasks. Total is now five
    removeTask.addNewTask('test');
    removeTask.addNewTask('test');
    removeTask.addNewTask('test');

    // delete the second and third task
    removeTask.deleteTask(2);
    removeTask.deleteTask(3);

    // check if the array contains three tasks
    expect(removeTask.store.length).toBe(3);

    // check if the inner html contains the three tasks
    expect(document.querySelector('.task-container').children.length).toBe(3);
  });
});