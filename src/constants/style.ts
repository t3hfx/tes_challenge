import {Dimensions} from 'react-native';

// export const defaultMargin = 16;
// export const defaultBorderRadius = 4;
export const theme = {
  margin: {
    defaultMargin: 16,
  },
  borderRadius: {
    defaultBorderRadius: 4,
  },
  colors: {
    blue: 'blue',
    white: 'white',
  },
};

export const {
  width: windowWidth,
  height: windowHeight,
  scale: windowScale,
} = Dimensions.get('window');
