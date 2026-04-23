/**
 * About page with project overview.
 * @see Heading - Heading component
 * @see Card - Card component
 */
import { Link } from 'react-router-dom';

import Heading from '@components/shared/Heading.component';
import { Card } from '@components/ui/card';

const aboutSections = [
  {
    title: 'Built With',
    items: ['React (Vite)', 'JavaScript (ES6+)', 'shadcn/ui components', 'Tailwind CSS'],
  },
  {
    title: 'Key Features',
    items: [
      'Create, complete, and remove tasks',
      'Filter active and completed items',
      'Local storage persistence for tasks and theme preferences between visits',
    ],
  },
  {
    title: 'Technical Focus',
    items: [
      'Client-side persistence using localStorage',
      'State management with React hooks',
      'Reusable component structure for shared UI patterns',
      'Clear separation between task logic and presentation',
    ],
  },
];

function AboutPage() {
  return (
    <Card className="mt-6 flex gap-3 overflow-hidden rounded-[4px] px-5 py-3 shadow-lg">
      <Heading hLevel={1}>About</Heading>
      <p className="space-y-1 pl-5 text-sm text-foreground/90">
        This project is a frontend-focused React application designed to keep task management fast,
        clear, and approachable. It uses localStorage for lightweight client-side persistence and
        emphasizes clean component structure, intentional state management, and a UI designed for
        clarity and quick interaction.
      </p>

      <div className="space-y-4">
        {aboutSections.map((section) => (
          <section key={section.title} className="space-y-2">
            <Heading hLevel={2} className="text-sm uppercase tracking-wide text-foreground/80">
              {section.title}
            </Heading>
            <ul className="list-disc space-y-1 pl-5 text-sm text-foreground/90 marker:text-foreground/60">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p>
        <Link to="/" className="text-primary transition-colors hover:underline">
          Go back to the TODO List
        </Link>
      </p>
    </Card>
  );
}

export default AboutPage;
