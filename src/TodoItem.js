import React from 'react';

const TodoItem = ({item, index, editTodo, deleteTodo, toggleCheck}) => {
    return (<div className="row">
                <div className="col-md-1">
                    <input 
                        type="checkbox" 
                        checked={item.done}
                        onChange={() => toggleCheck(index)}
                    />
                </div> 
                <div className="col-md-1">{index + 1}</div> 
                <div className="col-md-7">
                    <p style={{textDecoration: item.done ? "line-through" : "none"}}>
                        {item.todo}
                    </p>
                </div>
                <div className="col-md-3">
                    <button 
                        className="btn btn-sm btn-primary" 
                        onClick={() => editTodo(index)}
                        disabled={item.done}>
                        Edit
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(index)}>
                        Delete
                    </button> 
                </div>
            </div>)
}

export default TodoItem;