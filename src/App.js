import React, { useState } from 'react';
import './App.css';

const TodoForm = ({handleSubmit, inputText, setInputText}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputText} onChange={event => setInputText(event.target.value)} />
      <button type="submit">Add</button>
    </form>)
}

const TodoList = ({todoList, setTodoList}) => {
  const editTodo = i => {
    const editText = window.prompt("Edit", todoList[i])
    if(editText !== null){
      const tempTodoList = [...todoList]
      tempTodoList[i] = editText
      setTodoList([...tempTodoList])
    }
  }

  const deleteTodo = i => {
    const tempTodoList = [...todoList]
    tempTodoList.splice(i, 1)
    setTodoList([...tempTodoList])
  }

  return (
    <div>
      {todoList.map((item, idx) => <TodoItem 
                                      key={idx} 
                                      item={item} 
                                      index={idx}
                                      editTodo={editTodo}
                                      deleteTodo={deleteTodo} 
                                    />)}
    </div>
  )
}

const TodoItem = ({item, index, editTodo, deleteTodo}) => {
  return (<div>{index + 1}. {item} 
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button> 
          </div>)
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
