/**
 * Main task list container.
 * @see useTasks - Task state management hook
 * @see NewTaskForm - Task creation form
 * @see TaskItem - Individual task display
 * @see TaskControls - Filter and clear controls
 */
import { useMemo, useState } from 'react';

import NewTaskForm from '@components/tasks/NewTaskForm.jsx';
import TaskControls from '@components/tasks/TaskControls.jsx';
import TaskItem from '@components/tasks/TaskItem.jsx';
import { Card } from '@components/ui/card';
import { useTasks } from '@hooks/useTasks.js';

function TaskList() {
  const [filter, setFilter] = useState('all');

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

  const totalTasks = useMemo(() => tasks.length, [tasks]);
  const completedTasks = useMemo(() => tasks.filter((task) => task.is_complete).length, [tasks]);

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
          <p className="no-tasks px-4 py-6 text-center text-sm text-muted-foreground sm:text-base">
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
