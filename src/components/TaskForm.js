import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'



function TaskForm({addTask, categories, selectedCategory, setSelectedCategory}) {

  const [task, setTask] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      id: Date.now(),
      text: task,
      checked: false,
      category: selectedCategory
    });
    setTask("");
  }
  return (
    <form className="todo"
    onSubmit={handleFormSubmit}> 
    <div className="wrapper">
  
      <input
      type="text" 
      id="task"
      className="input"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      required
      autoFocus
      maxLength={50}
      placeholder="Enter task"
      />
        <label
      htmlFor="task"
      className="label">
        Enter Task
      </label>
    </div>
  
    
    <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
    <button 
      type="submit"
      className="btn"
      aria-label="Add Task">
        <PlusIcon/>
    </button>

    
    
    
    
   
    </form>
    );
}


export default TaskForm;