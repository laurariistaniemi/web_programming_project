
import React, { useState } from 'react';


//to do list
function TodoList({ todos = [], addTodo, removeTodo }) {
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            addTodo({ text: inputValue, completed: false }); 
            setInputValue('');
        }
    };

    const [checked, setChecked] = useState(false);
    const handleToggleTodo = (index) => {
        setChecked(!checked); 
       };

    return (
        <div className="todo-container">
            <h2>Tasks</h2>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter a new task"
                />
                <button className="btn btn-primary" onClick={handleAddTodo}>
                    Add
                </button>
            </div>

            <ul className="list-group">
                {todos.map((todo, index) => (
                    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'list-group-item-success' : ''}`} key={index}>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`todo-checkbox-${index}`}
                                checked={checked}
                                onChange={() => handleToggleTodo(index)}
                                
                            />
                            <label className={`form-check-label ${todo.completed ? 'text-decoration-line-through' : ''}`} htmlFor={`todo-checkbox-${index}`}>
                                {todo.text}
                            </label>
                        </div>
                        <button className="btn btn-danger btn-sm" onClick={() => removeTodo(index)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
