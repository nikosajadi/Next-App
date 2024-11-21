// module.exports = {
//   stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
//   addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
//   framework: {
//     name: '@storybook/nextjs',
//     options: {},
//   },
// };

import path from 'path';

module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@': path.resolve(__dirname, '../src'),
      },
    };
    return config;
  },
};
