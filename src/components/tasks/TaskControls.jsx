/**
 * Task controls container.
 * @see TasksLeft - Shows remaining task count
 * @see Filters - Filter buttons
 * @see ClearCompleted - Clear completed tasks button
 */
import ClearCompleted from '@components/tasks/ClearCompleted.jsx';
import Filters from '@components/tasks/Filters.jsx';
import TasksLeft from '@components/tasks/TasksLeft.jsx';

function TaskControls({ filter, setFilter, totalTasks, completedTasks, clearCompleted }) {
  return (
    <div className="task-controls flex flex-col gap-3 border-t border-border px-4 py-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5 sm:py-2 sm:text-xs">
      <TasksLeft totalTasks={totalTasks} completedTasks={completedTasks} />
      <Filters filter={filter} setFilter={setFilter} />
      <ClearCompleted completedTasks={completedTasks} clearCompleted={clearCompleted} />
    </div>
  );
}

export default TaskControls;
