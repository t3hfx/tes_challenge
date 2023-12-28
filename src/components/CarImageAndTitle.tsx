import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {theme, windowWidth} from '~/constants/style';

type Props = {
  image?: string;
  title?: string;
  rating?: string;
};

export const CarImageAndTitle = ({image, title, rating}: Props) => {
  return (
    <View>
      <FastImage
        source={{uri: image}}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{title}</Text>
      </View>
      {rating && (
        <View style={[styles.textWrapper, styles.textWrapperRight]}>
          <Text style={styles.text}>{rating}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  textWrapperRight: {
    right: 0,
  },
  text: {
    fontSize: 25,
    color: theme.colors.white,
    backgroundColor: theme.colors.blue,
    marginBottom: theme.margin.defaultMargin,
    paddingHorizontal: theme.margin.defaultMargin,
  },
});
