/**
 * Application header component.
 */

import Title from "@components/shared/Title.component";
import { Button} from "@components/ui/button";

export default function Header() {
  return (
    <header className="app-header flex">
      <Title>Supabase Tasks</Title>
      <p className="app-header__subtitle">
        Simple task list powered by Supabase, built with React + Vite.
      </p>
      <Button variant="secondary">
        Click Me
      </Button>
    </header>
  );
}
