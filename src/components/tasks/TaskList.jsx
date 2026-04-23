/**
 * Main task list container.
 * @see useTasks - Task state management hook
 * @see NewTaskForm - Task creation form
 * @see TaskItem - Individual task display
 * @see TaskControls - Filter and clear controls
 */
import { useState, useMemo } from 'react';
import TaskItem from '@components/tasks/TaskItem.jsx';
import NewTaskForm from '@components/tasks/NewTaskForm.jsx';
import TaskControls from '@components/tasks/TaskControls.jsx';
import { useTasks } from '@hooks/useTasks.js';
import { Card } from '@components/ui/card';

/**
 * TaskList:
 *  - Uses the custom useTasks hook for all localStorage interactions.
 *  - Manages filter state (All / Active / Completed).
 *  - Delegates add / toggle / delete actions to the hook.
 *  - Displays summary information.
 */
function TaskList() {
  const [filter, setFilter] = useState('all');

  // Destructuring values from the custom hook.
  const {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
  } = useTasks();

  const handleAddTask = (title) => {
    addTask(title);
  };

  const handleToggleComplete = (id, isComplete) => {
    toggleTask(id, isComplete);
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
  };

  // Derived summary information based on current tasks.
  const totalTasks = useMemo(() => tasks.length, [tasks]);
  const completedTasks = useMemo(() => tasks.filter((task) => task.is_complete).length, [tasks]);

  // Derived filtered list based on current filter state.
  const visibleTasks = useMemo(
    () =>
      tasks.filter((task) => {
        if (filter === 'active') return !task.is_complete;
        if (filter === 'completed') return task.is_complete;
        return true;
      }),
    [tasks, filter],
  );

  const emptyMessage =
    filter === 'active'
      ? 'No active todos'
      : filter === 'completed'
        ? 'No completed todos'
        : 'No todos yet';

  return (
    <>
      <Card className="mt-6 rounded-[4px] shadow-lg">
        <NewTaskForm onAddTask={handleAddTask} />
      </Card>

      <Card className="mt-6 overflow-hidden rounded-[4px] shadow-lg">
        {visibleTasks.length === 0 ? (
          <p className="no-tasks px-4 py-6 text-center text-sm text-muted-foreground">
            {emptyMessage}
          </p>
        ) : (
          <ul className="task-list divide-y divide-border">
            {visibleTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleComplete={handleToggleComplete}
                onDelete={handleDeleteTask}
              />
            ))}
          </ul>
        )}
        <TaskControls
          filter={filter}
          setFilter={setFilter}
          totalTasks={totalTasks}
          completedTasks={completedTasks}
          clearCompleted={clearCompleted}
        />
      </Card>
    </>
  );
}

export default TaskList;
