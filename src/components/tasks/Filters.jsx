//This file is a group of toggle buttons at the bottom of the task list that changes how the list is filtered.
function Filters ({ filter, setFilter}) {

    //storing tailwind styles in variables here for easier styling
    const allBtn ="px-1 text-sm cursor-pointer"; // for all buttons
    const activeBtn ="text-primary"; //for active button styling
    const inactiveBtn ="text-muted-foreground hover:text-foreground";//hover/inactive colors

    return (
        <div className="filter-btns flex items-center gap-2 text-sm">
            <button
                type="button"
                onClick={() => setFilter("all")}
                aria-pressed={filter === "all"}
                className={`${allBtn} ${filter === "all" ? activeBtn : inactiveBtn}`}
                >All
            </button>
            <button
                type="button"
                onClick={() => setFilter("active")}
                aria-pressed={filter === "active"}
                className={`${allBtn} ${filter === "active" ? activeBtn : inactiveBtn}`}
                >Active
            </button>
            <button
                type="button"
                onClick={() => setFilter("inactive")}
                aria-pressed={filter === "completed"}
                className={`${allBtn} ${filter === "completed" ? activeBtn : inactiveBtn}`}
                >Completed
            </button>
        </div>
    );

}

export default Filters;

{/* <div style={{ marginBottom: "0.75rem", fontSize: "0.9rem" }}> - was on the div styles before*/}
