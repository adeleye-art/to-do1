import { useState } from 'react';
import styles from './Task.module.css';
import { CheckIcon  } from '@heroicons/react/24/outline';
import { PencilSquareIcon  } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';
function Task({task, deleteTask, toggleTask, }) {
    const [isChecked, setIsChecked] = useState(task.checked);
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);
    
    
    const handleCheckboxChange = (e) => {
        setIsChecked(!isChecked);
        toggleTask(task.id);
      
        
    }


    const handleEditClick = () => {
        setIsEditing(true);
      }
    
      const handleSaveClick = () => {
        setEditedText(editedText);
        setIsEditing(false);
      }
    
      const handleTextChange = (e) => {
        setEditedText(e.target.value);
      }

    return(
        <li className={styles.task}>
                
              <div className={styles["task-group"]}>
                <input
                type="checkbox" 
                className={styles.checkbox}
                checked={isChecked} 
                onChange={handleCheckboxChange}
                text={task.text}
                id={task.id}
                />
                <label htmlFor={task.id} className={styles.label}>
                    <p className={styles.checkmark}>
                      <CheckIcon strokeWidth={2} width={24} height={24}/>
                    </p>
                    {isEditing ? (
                      <form 
                      onSubmit={handleSaveClick}
                      className={styles.form}
                      >
                        <input
                        type="text"
                        className='input'
                        value={editedText}
                        onChange={handleTextChange}
                        onInput={(e) => setEditedText(e.target.value)}
                        required
                        autoFocus
                        maxLength={60}
                        placeholder="Update Task"
                        disabled = {isChecked}
                        />
                          <button 
                          className="btn"
                          aria-label={`Confirm edited task to now read ${editedText}`}
                          type="submit"
                          required
                          >
                          <CheckIcon strokeWidth={2} height={24} width={24} />
                          </button>
                       </form>
                    ) : (
                        editedText
                    )
                   
                    }
                    
                </label>
            </div>
            <div className={styles["task-group"]}>
                {!isEditing ? (
                    
                    <button
                    className='btn'
                    aria-label={`Delete ${task.text} Task`}
                    onClick={handleEditClick}>
                        <PencilSquareIcon width={24} height={24} />
                    </button>
                    ) : (""
                )}
               <button
                    className={`btn ${styles.delete}`}
                    aria-label={`Delete ${task.text} Task`}
                    onClick={() => deleteTask(task.id)}
                  >
                    <TrashIcon width={24} height={24} />
                </button>
            </div>
    </li>
  );
}

export default Task;


