/**
 * Task creation form.
 * @see Input - Reusable input component
 */
import { useState } from 'react';
import Input from '@components/shared/Input.component';

const NewTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmed = title.trim();

    if (!trimmed) {
      setError('Task title cannot be empty.');
      return;
    }

    if (trimmed.length > 80) {
      setError('Task title cannot exceed 80 characters.');
      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      await onAddTask(trimmed);
      setTitle('');
    } catch (formError) {
      console.log(formError);
      setError('Failed to add a task. Error message: ' + formError?.message);

      setTimeout(() => {
        setError('');
      }, 5000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form px-5 py-1 mb-2">
      <label htmlFor="task-title" className="sr-only">
        Task title
      </label>

      <div className="flex items-center mt-3 gap-3">
        <span
          aria-hidden="true"
          className="h-5 w-5 rounded-full border border-border"
        />
        <Input
          id="task-title"
          type="text"
          placeholder="Create a new todo…"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          disabled={submitting}
          className="flex-1"
        />
      </div>

      {error && <p className="error-text px-5 pb-4 text-sm text-destructive">{error}</p>}
    </form>
  );
};

export default NewTaskForm;
