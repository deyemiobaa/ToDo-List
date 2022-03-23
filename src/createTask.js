class NewTask{
  constructor(description, index) {
    this.description = description
    this.index = index
    this.id = Date.now()
    this.completed = false
  }
}

export default NewTask