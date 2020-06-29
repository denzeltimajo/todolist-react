import React, { useState } from 'react';
import './App.css';

const TodoForm = ({handleSubmit, setInputText}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={event => setInputText(event.target.value)} />
      <button type="submit">Add</button>
    </form>)
}

const TodoListApp = props => {

  const [todoList, setTodoList] = useState([])
  const [inputText, setInputText] = useState("")

  const handleSubmit = (event) => {
    setTodoList([...todoList, inputText])
    console.log(todoList)
    event.preventDefault()
  }

  return (
  <div>
    <TodoForm handleSubmit={handleSubmit} setInputText={setInputText}/>
  </div>)

}

function App() {

  return (
    <div className="App">
      <TodoListApp />
    </div>
  );
}

export default App;
