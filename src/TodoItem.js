import React from 'react';

const TodoItem = ({item, index, editTodo, deleteTodo}) => {
    return (<div>{index + 1}. {item} 
                <button onClick={() => editTodo(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button> 
            </div>)
}

export default TodoItem;