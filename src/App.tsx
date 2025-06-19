import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TasksPage from './pages/TasksPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<TasksPage />} />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            Task Management App &copy; {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App; 