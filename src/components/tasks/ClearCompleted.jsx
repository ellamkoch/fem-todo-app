//This file controls the UI state and delegates the actual task updates to the data layer.
//shadcn imports
import { Button } from "@components/ui/button";

function ClearCompleted({ completedTasks, clearCompleted }) {
  const isDisabled = completedTasks === 0;//button is disabled if completedTasks is = 0

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={clearCompleted}
      disabled={isDisabled}
    >
      Clear Completed
    </Button>
  );
}

export default ClearCompleted;
