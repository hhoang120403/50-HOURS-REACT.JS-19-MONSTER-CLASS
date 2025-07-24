import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          value={inputValue}
          onChange={handleChange}
          placeholder='Add a new Todo'
        />
        <button type='submit'>Add Todo</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={todo + index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
