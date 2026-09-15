/**
 * Filter buttons (All / Active / Completed).
 * @see Button - shadcn button component
 */
import { Button } from '../ui/button';

function Filters({ filter, setFilter }) {
  const allBtn = 'px-1';
  const activeBtn = 'text-primary';
  const inactiveBtn = 'text-muted-foreground hover:text-foreground';

  return (
    <div className="filter-btns flex flex-wrap items-center justify-center gap-1 sm:gap-2">
      <Button
        type="button"
        variant="ghost"
        onClick={() => setFilter('all')}
        aria-pressed={filter === 'all'}
        className={`min-h-10 ${allBtn} ${filter === 'all' ? activeBtn : inactiveBtn}`}
      >
        All
      </Button>
      <Button
        type="button"
        variant="ghost"
        onClick={() => setFilter('active')}
        aria-pressed={filter === 'active'}
        className={`min-h-10 ${allBtn} ${filter === 'active' ? activeBtn : inactiveBtn}`}
      >
        Active
      </Button>
      <Button
        type="button"
        variant="ghost"
        onClick={() => setFilter('completed')}
        aria-pressed={filter === 'completed'}
        className={`min-h-10 ${allBtn} ${filter === 'completed' ? activeBtn : inactiveBtn}`}
      >
        Completed
      </Button>
    </div>
  );
}

export default Filters;
