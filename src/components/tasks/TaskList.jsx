// React hooks imports:
// - useState: stores UI state (like the filter button you picked)
// - useMemo: calculates “derived values” (totals + filtered list) only when needed
import { useState, useMemo } from "react";


//child component imports
import TaskItem from "@components/tasks/TaskItem.jsx";
import NewTaskForm from "@components/tasks/NewTaskForm.jsx";
import TaskControls from "@components/tasks/TaskControls.jsx";

//custom hook import
import { useTasks } from "@hooks/useTasks.js";

/**
 * TaskList (Day 4):
 *  - Uses the custom useTasks hook for all Supabase interactions.
 *  - Manages filter state (All / Active / Completed).
 *  - Delegates add / toggle / delete actions to the hook.
 *  - Displays loading, error and summary information.
 */
function TaskList() {
  // UI-only state: tells which filter button is selected
  const [filter, setFilter] = useState("all"); // "all" | "active" | "completed"
 //Destructuring values from the custom hook.
  const {
    tasks, // our list of tasks (array of objects)
    loading,// true while the hook is fetching or updating
    error, //error msg string if something fails
    addTask, //helper functions that talk to supabase to add/toggle or delete tasks
    toggleTask,
    deleteTask,
    clearCompleted
  } = useTasks();

  /**
   * Adds a new task by inserting it into Supabase and updating local state.
   *
   * @param {string} title - Title of the new task.
   *///called when a newtaskform submits
  const handleAddTask = async (title) => {//fowards to hook, hook inserts into supabase
    addTask(title); // and updates the local state
  };

  /**
   * Toggles the is_complete flag of a task both in Supabase and local state.
   *
   * @param {number} id - Task ID.
   * @param {boolean} isComplete - Desired completion state.
   */
  const handleToggleComplete = async (id, isComplete) => {
    toggleTask(id, isComplete);
  };

  /**
   * Deletes a task by id from Supabase and local state.
   *
   * @param {number} id - Task ID.
   */
  const handleDeleteTask = async (id) => {
    deleteTask(id);
  };

  // Derived summary information based on current tasks.
  // useMemo is for remembering values & useCallback is for functions
  const totalTasks = useMemo(() => tasks.length, [tasks]);
  const completedTasks = useMemo(() => tasks.filter((task) => task.is_complete).length, [tasks]);

  // Derived filtered list based on current filter state.
  const visibleTasks = useMemo(() => tasks.filter((task) => {
    if (filter === "active") return !task.is_complete;
    if (filter === "completed") return task.is_complete;
    return true;
  }), [tasks, filter]);//dependency array

  return (
    <section className="card">
      <h2 className="color-white">Tasks</h2>

      <NewTaskForm onAddTask={handleAddTask} />

      {/* Filter controls - passing vars to props here. */}
      <TaskControls
        filter={filter}
        setFilter={setFilter}
        totalTasks={totalTasks}
        completedTasks={completedTasks}
        clearCompleted={clearCompleted}
      />

      {error && <p className="error-text">{error}</p>}

      {!loading && !error && tasks.length === 0 && <p>No tasks yet.</p>}

      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className="task-list">
          {visibleTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTask}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default TaskList;
