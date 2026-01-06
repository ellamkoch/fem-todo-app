
function Filters ({ filter, setFilter}) {

    const allBtn = "px-2 py-1 text-sm";
    const activeBtn = "font-semibold text-primary";
    const completedBtn = "font-normal text-muted-foreground hover:text-foreground";

    return (
        <div className="flex items-center gap-2 text-sm">
            <button
                type="button"
                onClick={() => setFilter("all")}
                className={`${allBtn} ${filter === "all" ? activeBtn : completedBtn}`}
                >All
            </button>
            <button
                type="button"
                onClick={() => setFilter("active")}
                className={`${allBtn} ${filter === "active" ? activeBtn : completedBtn}`}
                >Active
            </button>
            <button
                type="button"
                onClick={() => setFilter("completed")}
                className={`${allBtn} ${filter === "completed" ? activeBtn : completedBtn}`}
                >Completed
            </button>
        </div>
    );

}

export default Filters;

{/* <div style={{ marginBottom: "0.75rem", fontSize: "0.9rem" }}> - was on the div styles before*/}
