import { render, screen } from '@testing-library/react';
import { EntitiesTable } from '@/components/entities/table';
import { addEntitySchema } from '@/schemas/entity';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router';

describe('EntitiesTable', () => {
  it('renders table headers based on schema keys', () => {
    render(
      <MemoryRouter>
        <EntitiesTable entities={[]} />
      </MemoryRouter>,
    );

    const keys = Object.keys(addEntitySchema.shape);

    keys.forEach((key) => {
      expect(screen.getByText(key)).toBeInTheDocument();
    });
  });

  it('renders rows for entities', () => {
    const entities = [
      { id: 1, name: 'Max', email: 'max@shulov.com', age: 21, about: '' },
      {
        id: 2,
        name: 'Sergey',
        email: 'sergey@shulov.com',
        age: 30,
        about: 'Hi',
      },
    ];

    render(
      <MemoryRouter>
        <EntitiesTable entities={entities} />
      </MemoryRouter>,
    );

    expect(screen.getByText('Max')).toBeInTheDocument();
    expect(screen.getByText('sergey@shulov.com')).toBeInTheDocument();
  });
});
