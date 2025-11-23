import { render, screen } from '@testing-library/react';
import { EntitiesPage } from '@/pages/entities';
import { describe, expect, it, vi } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import type { Entity } from '@/schemas/entity';

const renderWithProviders = (ui: ReactNode) => {
  const client = new QueryClient();
  return render(
    <QueryClientProvider client={client}>
      <MemoryRouter> {ui}</MemoryRouter>
    </QueryClientProvider>,
  );
};

const useEntitiesMock = vi.fn();
vi.mock('@/hooks/use-entities', () => ({
  useEntities: () => useEntitiesMock(),
}));

describe('EntitiesPage', () => {
  it('renders empty state when no entities', () => {
    useEntitiesMock.mockReturnValueOnce({
      data: [] satisfies Entity[],
      isLoading: false,
    });

    renderWithProviders(<EntitiesPage />);

    expect(screen.queryByText(/no entities/i)).not.toBeNull();
  });

  it('renders table when entities exist', () => {
    useEntitiesMock.mockReturnValueOnce({
      data: [
        { id: 1, name: 'Max', email: 'max@shulov.com', age: 25 },
      ] satisfies Entity[],
      isLoading: false,
    });

    renderWithProviders(<EntitiesPage />);

    expect(screen.queryByText('Max')).not.toBeNull();
  });
});
