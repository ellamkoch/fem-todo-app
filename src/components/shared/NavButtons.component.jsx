/**
 * Navigation buttons for the header.
 * @see Button - shadcn button component
 * @see ButtonGroup - Button group component
 */
import { NavLink } from 'react-router-dom';

import { ButtonGroup, ButtonGroupSeparator } from '@components/ui/button-group';
import { Button } from '@components/ui/button';

function NavButtons() {
  const baseBtn =
    'min-h-10 px-2 text-sm text-white hover:underline bg-transparent transition-transform duration-150 hover:scale-[1.03] sm:text-base md:text-lg';

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'px-1 py-1 font-medium text-white transition-colors'
      : 'px-1 py-1 text-white/70 transition-colors hover:text-white';

  return (
    <ButtonGroup aria-label="Nav Bar" className="min-w-0">
      <Button asChild variant="ghost" className={baseBtn}>
        <NavLink to="/" className={navLinkClass}>
          TODO List
        </NavLink>
      </Button>

      <ButtonGroupSeparator className="max-h-7 bg-white/70 px-0.25" />

      <Button asChild variant="ghost" className={baseBtn}>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
      </Button>
    </ButtonGroup>
  );
}

export default NavButtons;
