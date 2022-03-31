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

describe('edit and update status', () => {
  test('edit a task', () => {
    const edit = new AddRemoveTask();

    // edit the task on index two
    edit.editTask(2, 'edited this task');

    // check if the edit input matches the regex espression
    expect(edit.store[2].description).toMatch(/edited/);
  });

  test('item is completed', () => {
    const update = new AddRemoveTask();

    // update the status of task on index 1
    update.markItemAsComplete(1, update.store);

    // check if the task is completed
    expect(update.store[1].completed).toBe(true);
  });

  test('clear all completed', () => {
    const completed = new AddRemoveTask();
    // we had three tasks left and we marked one as complete

    // clear all completed task
    completed.clearCompletedTasks();

    // check if the remaining task is two
    expect(completed.store.length).toBe(2);
  });
});