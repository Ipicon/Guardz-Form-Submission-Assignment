import { AddEntityButton } from './add-button';
import { addEntitySchema, type Entity } from '@/schemas/entity';
import { getSchemaKeys } from '@/lib/utils';

interface Props {
  entities: Entity[];
}

const entityKeys = getSchemaKeys(addEntitySchema);

export const EntitiesTable = ({ entities }: Props) => {
  return (
    <div className="flex w-full flex-col space-y-4 px-5">
      <div className="flex w-full flex-row justify-end">
        <AddEntityButton />
      </div>
      <table className="w-full">
        <thead>
          <tr>
            {entityKeys.map((key) => (
              <th key={key} className="border px-4 py-2 text-left font-bold">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {entities.map((entity) => (
            <tr key={entity.id} className="even:bg-muted">
              {entityKeys.map((key) => (
                <th key={key} className="border px-4 py-2 text-left font-bold">
                  {entity[key]}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
