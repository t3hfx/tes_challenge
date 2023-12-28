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

  const timer = useRef(30000);

  useEffect(() => {
    BackgroundTimer.runBackgroundTimer(() => {
      //   console.log('refetching, ', pullToRefreshTriggered);
      console.log('refetching');
      refetch();
    }, timer.current);

    () => BackgroundTimer.stopBackgroundTimer();
  }, [refetch, pullToRefreshTriggered]);

  useEffect(() => {
    console.log('pullToRefreshTriggered, ', pullToRefreshTriggered);
    timer.current = pullToRefreshTriggered ? 5000 : 1000;
  }, [pullToRefreshTriggered]);

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
