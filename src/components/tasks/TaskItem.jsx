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
    <li className="task-item group flex items-center justify-between gap-3 px-5 py-3">
      <label className="task-item__content text-sm flex flex-1 cursor-pointer items-center gap-3">
        <CustomCheckbox checked={task.is_complete} onChange={handleToggle} />
        <span
          className={
            task.is_complete
              ? 'task-item__title text-muted-foreground line-through'
              : 'task-item__title text-foreground'
          }
        >
          {task.title}
        </span>
      </label>
      <button
        type="button"
        className="task-item__delete text-muted-foreground hover:text-foreground"
        onClick={handleDelete}
        aria-label="Delete task"
      >
        ✕
      </button>
    </li>
  );
}
