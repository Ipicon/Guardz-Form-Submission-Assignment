import { AddEntityForm } from '@/components/entities';
import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const mutateMock = vi.fn();
vi.mock('react-router', () => ({
  useNavigate: () => vi.fn(),
}));

vi.mock('@/hooks/use-entities', () => ({
  useAddEntity: () => ({
    mutate: mutateMock,
    isPending: false,
  }),
}));

describe('AddEntityForm', () => {
  beforeEach(() => {
    mutateMock.mockClear();
  });

  it('shows an error when submitting invalid data', () => {
    render(<AddEntityForm />);

    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText(/✖/i)).toBeInTheDocument();
  });

  it('calls mutate when submitting valid data', () => {
    render(<AddEntityForm />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'Max' },
    });

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'max@shulov.com' },
    });

    fireEvent.change(screen.getByLabelText(/age/i), {
      target: { value: 22 },
    });

    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));

    expect(mutateMock).toHaveBeenCalledTimes(1);

    expect(mutateMock).toHaveBeenCalledWith(
      {
        name: 'Max',
        email: 'max@shulov.com',
        age: 22,
        about: '',
      },
      expect.any(Object),
    );
  });
});
