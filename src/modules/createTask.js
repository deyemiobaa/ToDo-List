class NewTask {
  constructor(description, index) {
    this.description = description;
    this.index = index;
    this.id = Math.random().toString(36).substr(2, 7).replace(/[^a-z]/g, '');
    this.completed = false;
  }
}

export default NewTask;