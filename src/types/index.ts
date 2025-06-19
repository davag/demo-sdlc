/**
 * Core data interfaces for the Task Management Application
 * Defines the shape of data objects used throughout the app
 */

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  status: 'todo' | 'in-progress' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

export interface FilterState {
  priority: 'all' | 'high' | 'medium' | 'low';
  status: 'all' | 'todo' | 'in-progress' | 'completed';
}

/**
 * Theme type for application theming
 */
export type Theme = 'light' | 'dark';

/**
 * Color mapping for priority levels using Tailwind CSS classes
 * Provides consistent visual indicators for task priorities
 */
export const PRIORITY_COLORS = {
  high: 'text-red-500',
  medium: 'text-yellow-500',
  low: 'text-green-500'
} as const;

/**
 * Human-readable labels for task status values
 * Used for consistent display across the UI
 */
export const STATUS_LABELS = {
  'todo': 'To Do',
  'in-progress': 'In Progress',
  'completed': 'Completed'
} as const;

/**
 * Priority level options for dropdowns and filters
 */
export const PRIORITY_OPTIONS = [
  { value: 'high', label: 'High Priority' },
  { value: 'medium', label: 'Medium Priority' },
  { value: 'low', label: 'Low Priority' }
] as const;

/**
 * Status options for task management
 */
export const STATUS_OPTIONS = [
  { value: 'todo', label: 'To Do' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'completed', label: 'Completed' }
] as const;
 