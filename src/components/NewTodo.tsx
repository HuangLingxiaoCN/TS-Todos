const NewTodo = () => {
  return (
    <form>
      <label htmlFor="textInput">Todo Text</label>
      <input type="text" id="textInput"></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
