//import custom component
import CustomCheckbox from "@components/shared/Checkbox.component";
/**
 * Displays a single task as a list item with toggle and delete actions
 *
 * @param {object} props
 * @param {{ id: number, title: string, is_complete: boolean, inserted_at?: string }} props.task
 * @param {(id: number) => void} props.onToggleComplete
 * @param {(id: number) => void} props.onDelete
 */
export default function TaskItem({ task, onToggleComplete, onDelete }) {
  /**
   * Handles checkbox changes and notifies the parent component.
   */
  const handleToggle = () => { //local helper that calls the parent callback onToggleComplete
    onToggleComplete(task.id, !task.is_complete); //sends the task id and new completed value
     //so the parent can update the database and state accordingly.
  };

  /**
   * Handles delete button clicks and notifies the parent component.
   */
  const handleDelete = () => {
    onDelete(task.id);
  };
//within this, if a title is checked, the task is marked as complete. same as if the checkbox is checked.
  return (
    <li className="task-item group flex items-center justify-between gap-3 px-4 ">
      <label className="task-item__content flex flex-1 cursor-pointer items-center gap-3">
        <CustomCheckbox
          checked={task.is_complete}
          onChange={handleToggle}
        />
        <span
          className={
            task.is_complete
              ? "task-item__title text-sm text-muted-foreground line-through"
              : "task-item__title text-sm text-foreground"
          }
        >
          {task.title}
        </span>
      </label>
      <button
        type="button"
        className="task-item__delete text-muted-foreground hover:text-foreground md:opacity-0 md:group-hover:opacity-100"
        onClick={handleDelete}
        aria-label="Delete task"
      >
        ✕
      </button>
    </li>
  );
}
