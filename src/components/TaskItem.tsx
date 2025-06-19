import React from 'react';
import { Task, PRIORITY_COLORS, STATUS_LABELS } from '../types';
import { Edit, Trash2, CheckCircle, Circle } from 'lucide-react';
import useTaskStore from '../store/taskStore';

interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit }) => {
  const { updateTask, deleteTask } = useTaskStore();
  
  const handleStatusToggle = () => {
    updateTask(task.id, {
      status: task.status === 'completed' ? 'todo' : 'completed'
    });
  };
  
  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
    }
  };
  
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 mb-3 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <button
            onClick={handleStatusToggle}
            className="flex-shrink-0 mt-1 focus:outline-none"
          >
            {task.status === 'completed' ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <Circle className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            )}
          </button>
          
          <div className="flex-grow">
            <h3 className={`font-medium ${
              task.status === 'completed' 
                ? 'line-through text-gray-500 dark:text-gray-400' 
                : 'text-gray-900 dark:text-white'
            }`}>
              {task.title}
            </h3>
            
            {task.description && (
              <p className={`mt-1 text-sm ${
                task.status === 'completed' 
                  ? 'line-through text-gray-400 dark:text-gray-500' 
                  : 'text-gray-600 dark:text-gray-300'
              }`}>
                {task.description}
              </p>
            )}
            
            <div className="flex items-center space-x-3 mt-2">
              <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${PRIORITY_COLORS[task.priority]}`}>
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
              </span>
              
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full">
                {STATUS_LABELS[task.status]}
              </span>
              
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(task.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 ml-4">
          <button
            onClick={() => onEdit(task)}
            className="p-1 text-gray-400 hover:text-blue-500 focus:outline-none"
            title="Edit task"
          >
            <Edit className="h-4 w-4" />
          </button>
          
          <button
            onClick={handleDelete}
            className="p-1 text-gray-400 hover:text-red-500 focus:outline-none"
            title="Delete task"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem; 