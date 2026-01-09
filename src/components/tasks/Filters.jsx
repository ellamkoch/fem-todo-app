//This file is a group of toggle buttons at the bottom of the task list that changes how the list is filtered.
import { Button } from "../ui/button";

function Filters ({ filter, setFilter}) {

    //storing tailwind styles in variables here for easier styling
    const allBtn ="px-1 text-sm cursor-pointer"; // for all buttons
    const activeBtn ="text-primary"; //for active button styling
    const inactiveBtn ="text-muted-foreground hover:text-accent-foreground";//hover/inactive colors

    return (
        <div className="filter-btns flex items-center gap-2 text-sm">
            <Button
                type="button"
                variant="ghost"
                onClick={() => setFilter("all")}
                aria-pressed={filter === "all"}
                className={`${allBtn} ${filter === "all" ? activeBtn : inactiveBtn}`}
                >All
            </Button>
            <Button
                type="button"
                variant="ghost"
                onClick={() => setFilter("active")}
                aria-pressed={filter === "active"}
                className={`${allBtn} ${filter === "active" ? activeBtn : inactiveBtn}`}
                >Active
            </Button>
            <Button
                type="button"
                variant="ghost"
                onClick={() => setFilter("completed")}
                aria-pressed={filter === "completed"}
                className={`${allBtn} ${filter === "completed" ? activeBtn : inactiveBtn}`}
                >Completed
            </Button>
        </div>
    );

}

export default Filters;

{/* <div style={{ marginBottom: "0.75rem", fontSize: "0.9rem" }}> - was on the div styles before*/}
