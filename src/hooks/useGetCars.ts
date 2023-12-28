import {useQuery} from '@tanstack/react-query';
import {useMemo} from 'react';
import {fetchCars} from '~/api/cars';

export const useGetCars = () => {
  const {isLoading, isFetching, isError, error, data, refetch} = useQuery({
    queryKey: ['fetchCars'],
    queryFn: () => fetchCars(),
  });

  return useMemo(
    () => ({
      data,
      isLoading,
      isFetching,
      isError,
      error,
      refetch,
    }),
    [data, isLoading, isFetching, isError, error, refetch],
  );
};
