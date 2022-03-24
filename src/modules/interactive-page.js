export const markItemAsComplete = (checkbox, array) => {
  checkbox.forEach((box) => {
    box.addEventListener('change', () => {
      const result = array.filter(
        task => box.nextElementSibling.id === task.id)
      if (box.checked) {
        box.nextElementSibling.classList.add('line');
        array[result[0].index - 1].completed = true
      } else {
        box.nextElementSibling.classList.remove('line');
        array[result[0].index - 1].completed = false
      }
      localStorage.setItem('ToDoList', JSON.stringify(array));
    });
  });
};


export const deleteAllTasks = (button, container) => {
  button.addEventListener('click', () => {
    container.innerHTML = '';
    localStorage.clear()
  });
};
