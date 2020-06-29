import React, { useState } from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './App.css';


const TodoListApp = props => {
  const [todoList, setTodoList] = useState([])
  const [inputText, setInputText] = useState("")

  const handleSubmit = (event) => {
    setTodoList([...todoList, inputText])
    setInputText("")
    event.preventDefault()
  }

  return (
  <div className="container">
    <TodoForm 
      handleSubmit={handleSubmit} 
      inputText={inputText} 
      setInputText={setInputText}/>
    <TodoList todoList={todoList} setTodoList={setTodoList} />
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
