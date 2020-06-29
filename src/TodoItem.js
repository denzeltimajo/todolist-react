import React from 'react';

const TodoItem = ({item, index, editTodo, deleteTodo}) => {
    return (<div className="row">
                <div className="col-md-1">{index + 1}</div> 
                <div className="col-md-8">{item}</div>
                <div className="col-md-3">
                    <button className="btn btn-sm btn-primary" onClick={() => editTodo(index)}>
                        Edit
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(index)}>
                        Delete
                    </button> 
                </div>
            </div>)
}

export default TodoItem;