import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {
  defaultBorderRadius,
  defaultMargin,
  theme,
  windowWidth,
} from '~/constants/style';
import {Screens} from '~/navigation/constants';
import {RootNavigationProp} from '~/navigation/types';
import {CarImageAndTitle} from './CarImageAndTitle';

type Props = {
  image?: string;
  title?: string;
  description?: string;
  id?: string;
  rating?: string;
};

export const CarItem: FC<Props> = ({image, title, description, id, rating}) => {
  const navigation = useNavigation<RootNavigationProp>();
  return (
    <View style={styles.container} testID={'car-item'}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(Screens.Car, {image, title, description, rating})
        }
        disabled={!id}>
        <CarImageAndTitle image={image} title={title} />
      </TouchableOpacity>
      <Text style={styles.description}>
        {description?.slice(0, 50) + '...'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: theme.margin.defaultMargin,
    marginTop: theme.margin.defaultMargin,
  },
  image: {
    height: windowWidth / 2,
    width: windowWidth - theme.margin.defaultMargin * 2,
    borderRadius: theme.borderRadius.defaultBorderRadius,
  },
  textWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
    bottom: 0,
  },
  text: {
    fontSize: 25,
    color: theme.colors.white,
    backgroundColor: theme.colors.blue,
    marginBottom: theme.margin.defaultMargin,
    paddingHorizontal: theme.margin.defaultMargin,
  },
  description: {
    marginTop: theme.margin.defaultMargin,
  },
});
