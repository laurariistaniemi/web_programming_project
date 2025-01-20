
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navigation';
import TodoLists from './ToDoLists'; 
import Home from './home'; 
import Habit from './habits';
import './App.css';


function App() {
  const [lists, setLists] = useState([{ title: 'My First List', todos: [] }]);

  useEffect(() => {
    const storedLists = JSON.parse(localStorage.getItem('todoLists'));
    if (storedLists) {
      setLists(storedLists);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todoLists', JSON.stringify(lists));
  }, [lists]);

  const addList = (title) => {
    setLists((prevLists) => [...prevLists, { title, todos: [] }]);
  };

  const addTodoToList = (listIndex, todo) => {
    const newLists = [...lists];
    newLists[listIndex].todos.push(todo);
    setLists(newLists);
  };

  const removeTodoFromList = (listIndex, todoIndex) => {
    const newLists = [...lists];
    newLists[listIndex].todos.splice(todoIndex, 1);
    setLists(newLists);
  };

  return (
    //navigation through Router
      <Router>
          <Navbar />
          <div className="container mt-4">
              <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route
                      path="/todo"
                      element={<TodoLists
                          lists={lists}
                          addList={addList}
                          addTodoToList={addTodoToList}
                          removeTodoFromList={removeTodoFromList} />} />
                    <Route path="/habits" element={<Habit />} />

              </Routes>
          </div>
      </Router>
    
  );
}



export default App;

