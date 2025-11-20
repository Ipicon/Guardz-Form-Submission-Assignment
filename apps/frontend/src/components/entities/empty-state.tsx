import { AddEntityButton } from './add-button';

export const NoEntities = () => {
  return (
    <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center space-y-4">
      <p className="text-3xl font-semibold tracking-tight">
        You have no entities...
      </p>
      <AddEntityButton />
    </div>
  );
};
