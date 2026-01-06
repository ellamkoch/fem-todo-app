//This file handles the logic of counting the tasks left
function TasksLeft({ totalTasks, completedTasks }){
    return (
        <p className="task-left text-sm text-muted-foreground">
          {totalTasks - completedTasks} items left
        </p>
    );
}

export default TasksLeft;
