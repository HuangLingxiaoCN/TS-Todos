class Todo {
  id: string;
  text: string;

  constructor(todoTexxt: string) {
    this.text = todoTexxt;
    this.id = Math.random().toString();
  }
}

export default Todo;