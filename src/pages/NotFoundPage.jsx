/**
 * 404 Not Found page.
 * @see Card - Card component
 * @see Heading - Heading component
 */
import { Card } from '@components/ui/card';
import Heading from '@components/shared/Heading.component';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <Card className="flex mt-6 px-5 py-3 gap-3 rounded-[4px] shadow-lg overflow-hidden">
      <Heading hLevel={1}>404 - Not Found</Heading>
      <p className="text-m">
        Like the droids you were looking for, the page you were looking for is not here.
      </p>
      <p>
        <Link to="/" className="text-primary/80 hover:underline text-primary transition-colors">
          Go back to the TODO List
        </Link>
      </p>
    </Card>
  );
}

export default NotFoundPage;
