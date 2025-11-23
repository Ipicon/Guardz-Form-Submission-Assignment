import { Spinner } from '@/components/ui/spinner';
import { useEntities } from '@/hooks/use-entities';
import { EntitiesTable, NoEntities } from '@/components/entities';

export const EntitiesPage = () => {
  const { data, isLoading, error } = useEntities();

  if (isLoading || error)
    return (
      <div className="absolute flex h-screen w-screen items-center justify-center">
        {isLoading ? (
          <Spinner className="size-8" />
        ) : (
          <p>
            Oops something bad happend... <br />
            <span className="text-destructive">{error?.message}</span>
          </p>
        )}
      </div>
    );

  const entities = data ?? [];

  return (
    <div className="flex w-full flex-col items-center space-y-2 pt-2">
      <p className="text-center text-4xl font-extrabold tracking-tight text-balance">
        Guardz - Form Submissions
      </p>
      {entities.length === 0 ? (
        <NoEntities />
      ) : (
        <EntitiesTable entities={entities} />
      )}
    </div>
  );
};
