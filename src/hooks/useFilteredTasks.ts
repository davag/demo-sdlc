import { useMemo } from 'react';
import useTaskStore from '../store/taskStore';

const useFilteredTasks = () => {
  const { tasks, filters } = useTaskStore();
  
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      // Filter by priority
      if (filters.priority !== 'all' && task.priority !== filters.priority) {
        return false;
      }
      
      // Filter by status
      if (filters.status !== 'all' && task.status !== filters.status) {
        return false;
      }
      
      return true;
    });
  }, [tasks, filters]);
  
  return filteredTasks;
};

export default useFilteredTasks; 