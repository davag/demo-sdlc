import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task, FilterState, Theme } from '../types';

interface TaskState {
  tasks: Task[];
  filters: FilterState;
  theme: Theme;
  // Actions
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTask: (id: string, updates: Partial<Omit<Task, 'id' | 'createdAt'>>) => void;
  deleteTask: (id: string) => void;
  setFilter: (filters: Partial<FilterState>) => void;
  clearFilters: () => void;
  toggleTheme: () => void;
}

const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      filters: {
        priority: 'all',
        status: 'all',
      },
      theme: 'light',
      
      addTask: (taskData) => set((state) => {
        const newTask: Task = {
          ...taskData,
          id: crypto.randomUUID(),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        return { tasks: [...state.tasks, newTask] };
      }),
      
      updateTask: (id, updates) => set((state) => ({
        tasks: state.tasks.map(task => 
          task.id === id 
            ? { ...task, ...updates, updatedAt: new Date() } 
            : task
        )
      })),
      
      deleteTask: (id) => set((state) => ({
        tasks: state.tasks.filter(task => task.id !== id)
      })),
      
      setFilter: (filterUpdates) => set((state) => ({
        filters: { ...state.filters, ...filterUpdates }
      })),
      
      clearFilters: () => set({
        filters: { priority: 'all', status: 'all' }
      }),
      
      toggleTheme: () => set((state) => ({
        theme: state.theme === 'light' ? 'dark' : 'light'
      })),
    }),
    {
      name: 'task-storage',
      partialize: (state) => ({ 
        tasks: state.tasks, 
        filters: state.filters,
        theme: state.theme 
      }),
    }
  )
);

export default useTaskStore; 