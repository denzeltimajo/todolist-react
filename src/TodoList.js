import React from 'react';
import TodoItem from './TodoItem'

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

export default TodoList;