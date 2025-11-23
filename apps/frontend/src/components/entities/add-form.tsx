import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  Field,
  FieldDescription,
} from '@/components/ui/field';
import { prettifyError } from 'zod';
import { Button } from '../ui/button';
import { useState, type FormEvent } from 'react';
import { addEntitySchema } from '@/schemas/entity';
import { useAddEntity } from '@/hooks/use-entities';
import { Spinner } from '@/components/ui/spinner';
import { useNavigate } from 'react-router';

export const AddEntityForm = () => {
  const { mutate, isPending } = useAddEntity();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());

    const entityParseRes = addEntitySchema.safeParse(values);

    if (!entityParseRes.success) {
      setError(prettifyError(entityParseRes.error));
      return;
    }

    mutate(entityParseRes.data, {
      onSuccess: () => {
        setError('');
        navigate('/');
      },
      onError: (err: Error) => setError(err.message),
    });
  };

  return (
    <form className="w-full max-w-md" onSubmit={onSubmit}>
      <FieldSet>
        <FieldGroup>
          <FieldLegend className="self-center">Add a new entity:</FieldLegend>
          <Field>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input id="name" name="name" type="text" />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" name="email" type="text" />
          </Field>
          <Field>
            <FieldLabel htmlFor="age">Age</FieldLabel>
            <Input id="age" name="age" type="number" placeholder="18" />
            <FieldDescription>Must be at least 18 years old.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="about">Feedback</FieldLabel>
            <Textarea
              id="about"
              name="about"
              placeholder="Tell us something about you..."
              rows={4}
            />
          </Field>
          <Button name="submit" type="submit" disabled={isPending}>
            {isPending && <Spinner />} Submit
          </Button>
        </FieldGroup>
      </FieldSet>
      {error !== '' && <p className="text-destructive pt-4">{error}</p>}
    </form>
  );
};
