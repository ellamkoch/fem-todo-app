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
    <form onSubmit={handleSubmit} className="new-task-form mb-2 px-4 py-1 sm:px-5">
      <label htmlFor="task-title" className="sr-only">
        Task title
      </label>

      <div className="mt-3 flex items-center gap-3">
        <span aria-hidden="true" className="h-5 w-5 shrink-0 rounded-full border border-border" />
        <Input
          id="task-title"
          type="text"
          placeholder="Create a new todo..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          disabled={submitting}
          className="min-h-10 flex-1 text-sm sm:text-base"
        />
      </div>

      {error && <p className="error-text px-2 pb-4 pt-2 text-sm text-destructive sm:px-5">{error}</p>}
    </form>
  );
};

export default NewTaskForm;
