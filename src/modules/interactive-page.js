export const updateInputState = (field) => {
  if (field.classList.contains('line')) {
    field.readOnly = false;
    field.classList.remove('line');
    field.classList.add('active');
  } else {
    field.classList.add('active');
    field.readOnly = false;
  }
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
