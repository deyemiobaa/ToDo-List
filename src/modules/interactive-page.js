export const markItemAsComplete = (checkbox, array) => {
  checkbox.forEach((box) => {
    box.addEventListener('change', () => {
      const result = array.filter(
        (task) => box.nextElementSibling.id === task.id,
      );
      if (box.checked) {
        box.nextElementSibling.classList.add('line');
        array[result[0].index - 1].completed = true;
      } else {
        box.nextElementSibling.classList.remove('line');
        array[result[0].index - 1].completed = false;
      }
      localStorage.setItem('ToDoList', JSON.stringify(array));
    });
  });
};

export const deleteAllTasks = (button, container) => {
  button.addEventListener('click', () => {
    container.innerHTML = '';
    localStorage.clear();
  });
};

export const updateInput = (field, array) => {
  if (field.classList.contains('line')) {
    field.readOnly = false;
    field.classList.remove('line');
    field.classList.add('active');
  } else {
    field.classList.add('active');
    field.readOnly = false;
  }

  field.addEventListener('change', () => {
    const result = array.filter(
      (task) => field.id === task.id,
    );
    array[result[0].index - 1].description = field.value;
    localStorage.setItem('ToDoList', JSON.stringify(array));
  });
};

export const makeInputDefault = (field) => {
  if (field.previousElementSibling.checked) {
    field.classList.add('line');
    field.classList.remove('active');
    field.readOnly = true;
  } else {
    field.classList.remove('active');
    field.readOnly = true;
  }
};
