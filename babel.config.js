module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.d.ts',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '~': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
