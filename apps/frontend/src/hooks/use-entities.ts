import { addEntity, getEntities } from '@/api/entities';
import { QUERY_KEYS } from '@/lib/consts';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useEntities = () =>
  useQuery({
    queryKey: QUERY_KEYS.entities,
    queryFn: getEntities,
  });

export const useAddEntity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addEntity,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: QUERY_KEYS.entities });
    },
  });
};
