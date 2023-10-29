import Task from "./Task";


function TaskList({tasks, deleteTask, toggleTask, activeCategory}) {

    const filteredTasks =tasks.filter((task) => task.category === activeCategory )
    
    return(
        <ul>
            
               { filteredTasks.map((task) => (
                    <Task
                    key={task.id} 
                    task={task} 
                    deleteTask={deleteTask} 
                    toggleTask={toggleTask} 
                   
                    
                    />
                    ))
               }
        </ul>
    )
}
export default TaskList;