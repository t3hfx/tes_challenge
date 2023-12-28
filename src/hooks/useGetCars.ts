import {useQuery} from '@tanstack/react-query';
import {useEffect, useMemo, useRef} from 'react';
import BackgroundTimer from 'react-native-background-timer';
import {useSelector} from 'react-redux';
import {fetchCars} from '~/api/cars';
import {RootState} from '~/store/store';

export const useGetCars = () => {
  const {isLoading, isFetching, isError, error, data, refetch} = useQuery({
    queryKey: ['fetchCars'],
    queryFn: () => fetchCars(),
  });

  const pullToRefreshTriggered = useSelector(
    (state: RootState) => state.pullToRefresh,
  );

  useEffect(() => {
    BackgroundTimer.runBackgroundTimer(() => {
      refetch();
    }, 5000);

    () => BackgroundTimer.stopBackgroundTimer();
  }, [refetch, data]);

  useEffect(() => {
    BackgroundTimer.stopBackgroundTimer();
    refetch();
  }, [pullToRefreshTriggered, refetch]);

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
