import React from 'react';
import { FilterX } from 'lucide-react';
import useTaskStore from '../store/taskStore';
import { FilterState } from '../types';

const FilterBar: React.FC = () => {
  const { filters, setFilter, clearFilters } = useTaskStore();
  
  const handlePriorityChange = (priority: FilterState['priority']) => {
    setFilter({ priority });
  };
  
  const handleStatusChange = (status: FilterState['status']) => {
    setFilter({ status });
  };
  
  const handleClearFilters = () => {
    clearFilters();
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border dark:border-gray-700 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <label htmlFor="priority-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Filter by Priority
            </label>
            <select
              id="priority-filter"
              value={filters.priority}
              onChange={(e) => handlePriorityChange(e.target.value as FilterState['priority'])}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="all">All Priorities</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Filter by Status
            </label>
            <select
              id="status-filter"
              value={filters.status}
              onChange={(e) => handleStatusChange(e.target.value as FilterState['status'])}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="all">All Statuses</option>
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
        
        {(filters.priority !== 'all' || filters.status !== 'all') && (
          <button
            onClick={handleClearFilters}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            <FilterX size={16} />
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterBar; 