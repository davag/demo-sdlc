import React from 'react';
import { CheckSquare } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <CheckSquare className="h-6 w-6 text-blue-500" />
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">Task Manager</h1>
        </div>
        
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header; 