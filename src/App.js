import React, { useState } from 'react';
import './App.css';

const TodoForm = ({handleSubmit, inputText, setInputText}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputText} onChange={event => setInputText(event.target.value)} />
      <button type="submit">Add</button>
    </form>)
}

const TodoList = ({todoList}) => {
  return (
    <div>
      {todoList.map(item => <div>{item}</div>)}
    </div>
  )
}

const TodoListApp = props => {

  const [todoList, setTodoList] = useState([])
  const [inputText, setInputText] = useState("")

  const handleSubmit = (event) => {
    setTodoList([...todoList, inputText])
    setInputText("")
    event.preventDefault()
  }

  return (
  <div>
    <TodoForm 
      handleSubmit={handleSubmit} 
      inputText={inputText} 
      setInputText={setInputText}/>
    <TodoList todoList={todoList} />
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
