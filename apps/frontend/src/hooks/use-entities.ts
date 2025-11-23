import { getEntities } from '@/api/entities';
import { QUERY_KEYS } from '@/lib/consts';
import { useQuery } from '@tanstack/react-query';

export const useEntities = () =>
  useQuery({
    queryKey: QUERY_KEYS.entities,
    queryFn: getEntities,
  });
