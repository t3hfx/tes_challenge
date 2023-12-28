import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CarImageAndTitle} from '~/components/CarImageAndTitle';
import {RootContainerStackParamList, Screens} from '~/navigation/constants';
import {theme} from '~/constants/style';

type Props = NativeStackScreenProps<RootContainerStackParamList, Screens.Car>;

export const Car = ({
  route: {
    params: {description, image, title, rating},
  },
}: Props) => {
  return (
    <View style={styles.container}>
      <CarImageAndTitle title={title} image={image} rating={rating} />

      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: theme.margin.defaultMargin,
  },
  description: {
    marginTop: theme.margin.defaultMargin,
  },
});
