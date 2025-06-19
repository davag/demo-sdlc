import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import useFilteredTasks from '../hooks/useFilteredTasks';
import { Task } from '../types';

const TaskList: React.FC = () => {
  const filteredTasks = useFilteredTasks();
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  
  const handleEdit = (task: Task) => {
    setEditingTask(task);
  };
  
  const handleEditComplete = () => {
    setEditingTask(null);
  };
  
  return (
    <div className="mt-6">
      {editingTask && (
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">Edit Task</h2>
          <TaskForm 
            existingTask={editingTask} 
            onComplete={handleEditComplete} 
          />
        </div>
      )}
      
      {filteredTasks.length === 0 ? (
        <div className="text-center py-10 text-gray-500 dark:text-gray-400">
          <p>No tasks found with the current filters.</p>
        </div>
      ) : (
        filteredTasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onEdit={handleEdit} 
          />
        ))
      )}
    </div>
  );
};

export default TaskList; 