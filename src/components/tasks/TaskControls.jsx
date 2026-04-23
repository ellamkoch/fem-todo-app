/**
 * Task controls container.
 * @see TasksLeft - Shows remaining task count
 * @see Filters - Filter buttons
 * @see ClearCompleted - Clear completed tasks button
 */
import Filters from '@components/tasks/Filters.jsx';
import TasksLeft from '@components/tasks/TasksLeft.jsx';
import ClearCompleted from '@components/tasks/ClearCompleted.jsx';

function TaskControls({ filter, setFilter, totalTasks, completedTasks, clearCompleted }) {
  return (
    <div className="task-controls flex items-center justify-between px-2 text-xs text-muted-foreground border-t border-border py-2">
      <TasksLeft
        totalTasks={totalTasks}
        completedTasks={completedTasks}
      />
      <Filters
        filter={filter}
        setFilter={setFilter}
      />
      <ClearCompleted
        completedTasks={completedTasks}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default TaskControls;
