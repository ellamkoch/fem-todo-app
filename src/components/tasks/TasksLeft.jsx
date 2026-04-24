/**
 * Displays remaining task count.
 */
function TasksLeft({ totalTasks, completedTasks }) {
  const remaining = totalTasks - completedTasks;

  if (totalTasks === 0) return null;

  return (
    <p className="task-left px-1 text-center sm:text-left">
      {remaining} item{remaining !== 1 ? 's' : ''} left
    </p>
  );
}

export default TasksLeft;
