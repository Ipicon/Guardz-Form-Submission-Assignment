import { useState } from 'react';
import type { Entity } from '@/schemas/entity';
import { EntitiesTable, NoEntities } from '@/components/entities';

export const EntitiesPage = () => {
  const [entites, setEntities] = useState<Entity[]>([
    {
      name: 'meow',
      id: 1,
      email: 'asd@sada.com',
      age: 45,
      about: 'A curious feline.',
    },
    { name: 'woof', id: 123, email: 'woof@dog.com', age: 32 },
    {
      name: 'chirp',
      id: 456,
      email: 'birdie@sky.com',
      age: 21,
      about: 'Small bird with a big voice.',
    },
    { name: 'moo', id: 789, email: 'cow@farm.com', age: 27 },
    {
      name: 'quack',
      id: 101,
      email: 'duck@pond.com',
      age: 19,
      about: 'Enjoys swimming in the pond.',
    },
    { name: 'neigh', id: 102, email: 'horse@stable.com', age: 38 },
    {
      name: 'baa',
      id: 103,
      email: 'sheep@meadow.com',
      age: 28,
      about: 'Loves fresh grass.',
    },
  ]);

  return (
    <div className="felx w-full flex-col items-center space-y-2 pt-2">
      <p className="text-center text-4xl font-extrabold tracking-tight text-balance">
        Guardz - Form Submissions
      </p>
      {entites.length === 0 ? (
        <NoEntities />
      ) : (
        <EntitiesTable entities={entites} />
      )}
    </div>
  );
};
