/**
 * Hook for task state management with localStorage persistence.
 * @see appConstants - Storage key constants
 */
import { useEffect, useState } from 'react';
import { TODO_STORAGE_KEY } from '@/constants/appConstants';

function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem(TODO_STORAGE_KEY);
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    if (!title) return;

    const newTask = {
      id: crypto.randomUUID(),
      title,
      is_complete: false,
    };

    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id, isComplete) => {
    if (!id) return;

    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, is_complete: isComplete } : task)),
    );
  };

  const deleteTask = (id) => {
    if (!id) return;

    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.is_complete));
  };

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
  };
}

export { useTasks };
