const moduleResolver = [
  require.resolve('babel-plugin-module-resolver'),
  {
    root: ['./src/'],
    alias: {
      '~images': './src/asset/images',
      '~icons': './src/asset/icons',
      '~fonts': './src/asset/fonts',
      '~components': './src/components',
      '~constants': './src/constants',
      '~hooks': './src/hooks',
      '~navigators': './src/navigators',
      '~screens': './src/screens',
      '~services': './src/services',
      '~reducers': './src/stores/reducers',
      '~store': './src/stores/store',
      '~styles': './src/styles',
      '~theme': './src/theme',
      '~utils': './src/utils',
      '~': './src',
    },
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
      '.android.js',
      '.android.jsx',
      '.android.ts',
      '.android.tsx',
      '.ios.js',
      '.ios.jsx',
      '.ios.ts',
      '.ios.tsx',
      '.native.js',
      '.native.jsx',
      '.native.ts',
      '.native.tsx',
    ],
  },
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: [
        moduleResolver,
        'transform-remove-console',
        'react-native-paper/babel',
        'react-native-reanimated/plugin',
      ],
    },
    development: {
      plugins: [moduleResolver, 'react-native-reanimated/plugin'],
    },
  },
};
