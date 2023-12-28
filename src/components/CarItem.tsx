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
import {RootNavigationProp} from '~/types/navigation';

type Props = {
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  image?: string;
  title?: string;
  description?: string;
  id?: string;
};

export const CarItem: FC<Props> = ({image, title, description, id}) => {
  const navigation = useNavigation<RootNavigationProp>();
  return (
    <View style={styles.container} testID={'car-item'}>
      <TouchableOpacity
        onPress={() => navigation.navigate(Screens.Car, {carId: id, title})}
        disabled={!id}>
        <Image source={{uri: image}} resizeMode="cover" style={styles.image} />
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
      <Text>{description?.slice(0, 50) + '...'}</Text>
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
    borderRadius: defaultBorderRadius,
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
