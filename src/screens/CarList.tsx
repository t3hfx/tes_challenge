import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Car} from '~/api/types';
import {CarItem} from '~/components/CarItem';
import {useGetCars} from '~/hooks/useGetCars';

export const CarList = () => {
  const {data} = useGetCars();

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

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <FlashList
        data={data?.cars}
        renderItem={renderItem}
        estimatedItemSize={500}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
