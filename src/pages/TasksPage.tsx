import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const TasksPage: React.FC = () => {
  const [isAddingTask, setIsAddingTask] = useState(false);
  
  const handleAddComplete = () => {
    setIsAddingTask(false);
  };
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">My Tasks</h2>
        <button
          onClick={() => setIsAddingTask(!isAddingTask)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          aria-label={isAddingTask ? 'Cancel adding task' : 'Add new task'}
        >
          {isAddingTask ? 'Cancel' : 'Add Task'}
        </button>
      </div>
      
      {isAddingTask && (
        <div className="mb-6">
          <TaskForm onComplete={handleAddComplete} />
        </div>
      )}
      
      <FilterBar />
      <TaskList />
    </div>
  );
};

export default TasksPage; 