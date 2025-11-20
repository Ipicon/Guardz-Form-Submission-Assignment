import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { Link } from 'react-router';

export const AddEntityButton = () => {
  return (
    <Button asChild variant="outline" size="lg">
      <Link to="/add-entity">
        <PlusIcon /> Add new entity
      </Link>
    </Button>
  );
};
