const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.(c|d|t)sv$/, // load all .csv, .dsv, .tsv files with dsv-loader
    use: ['dsv-loader'] // or dsv-loader?delimiter=,
  });

  // Return the altered config
  return config;
};
