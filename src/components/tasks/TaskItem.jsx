/**
 * Individual task list item.
 * @see CustomCheckbox - Styled checkbox component
 */
import CustomCheckbox from '@components/shared/Checkbox.component';

export default function TaskItem({ task, onToggleComplete, onDelete }) {
  const handleToggle = () => {
    onToggleComplete(task.id, !task.is_complete);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <li className="task-item group flex items-start justify-between gap-3 px-4 py-3 sm:items-center sm:px-5">
      <label className="task-item__content flex min-w-0 flex-1 cursor-pointer items-start gap-3 text-sm sm:items-center sm:text-base">
        <CustomCheckbox checked={task.is_complete} onChange={handleToggle} />
        <span
          className={
            task.is_complete
              ? 'task-item__title break-words text-muted-foreground line-through'
              : 'task-item__title break-words text-foreground'
          }
        >
          {task.title}
        </span>
      </label>
      <button
        type="button"
        className="task-item__delete min-h-10 min-w-10 shrink-0 self-center text-lg text-muted-foreground hover:text-foreground"
        onClick={handleDelete}
        aria-label="Delete task"
      >
        x
      </button>
    </li>
  );
}
