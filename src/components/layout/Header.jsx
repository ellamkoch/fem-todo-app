/**
 * Application header component.
 */

import Title from "../shared/Title.component";
import { Button} from "../../components/ui/button";

export default function Header() {
  return (
    <header className="app-header flex">
      <Title>Supabase Tasks</Title>
      <p className="app-header__subtitle">
        Simple task list powered by Supabase, built with React + Vite.
      </p>
      <Button>
        Click Me
      </Button>
    </header>
  );
}
