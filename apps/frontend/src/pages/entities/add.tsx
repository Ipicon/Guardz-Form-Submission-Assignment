import { AddEntityForm } from '@/components/entities';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router';

export const AddEntityPage = () => {
  return (
    <div className="flex w-full justify-center pt-4">
      <Button
        asChild
        variant="outline"
        size="icon"
        className="absolute top-2 left-2"
      >
        <Link to="/">
          <ArrowLeftIcon />
        </Link>
      </Button>
      <AddEntityForm />
    </div>
  );
};
