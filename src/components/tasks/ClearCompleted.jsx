/**
 * Clear completed tasks button.
 * @see Button - shadcn button component
 */
import { Button } from '@components/ui/button';

function ClearCompleted({ completedTasks, clearCompleted }) {
  const isDisabled = completedTasks === 0;

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={clearCompleted}
      disabled={isDisabled}
      className="min-h-10 self-center px-1 text-sm text-muted-foreground hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50 sm:self-auto sm:text-xs"
    >
      Clear Completed
    </Button>
  );
}

export default ClearCompleted;
