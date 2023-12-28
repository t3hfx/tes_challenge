import {useQuery} from '@tanstack/react-query';
import {useEffect, useMemo} from 'react';
import {fetchCars} from '~/api/cars';
import BackgroundTimer from 'react-native-background-timer';

export const useGetCars = () => {
  const {isLoading, isFetching, isError, error, data, refetch} = useQuery({
    queryKey: ['fetchCars'],
    queryFn: () => fetchCars(),
  });

  useEffect(() => {
    BackgroundTimer.runBackgroundTimer(() => {
      refetch();
    }, 30000);

    () => BackgroundTimer.stopBackgroundTimer();
  }, [refetch]);

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
