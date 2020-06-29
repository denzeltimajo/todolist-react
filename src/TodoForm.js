import React from 'react';

const TodoForm = ({handleSubmit, inputText, setInputText}) => {
    return (<form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputText} 
                    onChange={event => setInputText(event.target.value)} />
                <button className="btn btn-default" type="submit">Add</button>
            </form>)
}

export default TodoForm;