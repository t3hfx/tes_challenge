import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {Car} from '~/api/types';
import {CarItem} from '~/components/CarItem';
import {useGetCars} from '~/hooks/useGetCars';
import {changeStatus} from '~/store/actions';

export const CarList = () => {
  const {data} = useGetCars();
  const dispatch = useDispatch();

  const renderItem = ({item}: ListRenderItemInfo<Car>) => {
    return (
      <CarItem
        id={item.id}
        image={item.poster}
        description={item.description}
        title={item.name}
        rating={item.rating}
      />
    );
  };

  const onRefresh = () => {
    dispatch(changeStatus());
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <FlashList
        data={data?.cars}
        renderItem={renderItem}
        estimatedItemSize={500}
        onRefresh={onRefresh}
        refreshing={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
