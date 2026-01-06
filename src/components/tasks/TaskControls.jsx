//This file contains controls for:
     {/* items left */}
      {/* filters: All / Active / Completed */}
      {/* clear completed */}
import Filters from "@components/tasks/Filters.jsx";
import TasksLeft from "@components/tasks/TasksLeft.jsx";

function TaskControls({ filter, setFilter, totalTasks, completedTasks }) {
  return (
    <div className="task-controls flex items-center justify-between px-4 py-3">
        <TasksLeft
            totalTasks={totalTasks}
            completedTasks={completedTasks}
        />
        <Filters filter={filter}
            setFilter={setFilter}
        />

    </div>
  );
}

export default TaskControls;
