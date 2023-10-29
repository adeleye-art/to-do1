import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import CategoryFilter from './components/CategoryFilter';
import useLocalStorage from './components/LocalStorage';

function App() {
  const categories =['work', 'personal', 'home'];
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [selectedCategory, setSelectedCategory] = useState('work');
 
  
 



  
 
const addTask = (task) => {
  setTasks([...tasks, task]);
}
const deleteTask = (id) => {
  setTasks(prevState => prevState.filter(task => task.id !== id))
}

const toggleTask = (id) => {
  setTasks(prevState => prevState.map(task => {
    if (task.id === id) {
      return {
        ...task,
        checked: !task.checked
      }
    }
    return task;
  }))
}
;



return (
  <div className="container">
    <h1>To-Do App</h1>
   <TaskForm 
   addTask={addTask}
   categories={categories}
   selectedCategory={selectedCategory}
   setSelectedCategory={setSelectedCategory}/>
  <CategoryFilter
   categories={categories}
   selectedCategory={selectedCategory}
   setSelectedCategory={setSelectedCategory}
   
   />
  {tasks.length > 0 && (
    <TaskList
    tasks={tasks}
    deleteTask={deleteTask}
    toggleTask={toggleTask}
  
    activeCategory={selectedCategory}

    />
  )}
  </div>
);
}

export default App;
