import React, { useState } from 'react';
import TodoList from './TodoList'; 

function TodoLists({ lists, addList, addTodoToList, removeTodoFromList }) {
    const [newListTitle, setNewListTitle] = useState('');
    const [selectedListIndex, setSelectedListIndex] = useState(0);

    const handleAddList = () => {
        if (newListTitle.trim() !== '') {
            addList(newListTitle);
            setNewListTitle('');
        }
    };

    return (
        <div>
            <h2>My To do lists</h2>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={newListTitle}
                    onChange={(e) => setNewListTitle(e.target.value)}
                    placeholder="Enter a new list title"
                />
                <button className="btn btn-primary" onClick={handleAddList}>
                    Add a new list
                </button>
            </div>

            <div>
                <ul className="list-group mb-3">
                    {lists.map((list, index) => (
                        <li
                            key={index}
                            className={`list-group-item d-flex justify-content-between align-items-center ${selectedListIndex === index ? 'active' : ''}`}
                            onClick={() => setSelectedListIndex(index)} 
                        >
                            {list.title}
                        </li>
                    ))}
                </ul>
            </div>

            <TodoList
                todos={lists[selectedListIndex].todos}
                addTodo={(todo) => addTodoToList(selectedListIndex, todo)} 
                removeTodo={(index) => removeTodoFromList(selectedListIndex, index)}
            />
        </div>
    );
}

export default TodoLists;
