const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

module.exports = withPlugins([
  nextEnv({
    staticPrefix: 'CUSTOM_STATIC_',
    publicPrefix: 'CUSTOM_PUBLIC_',
  }),
  [optimizedImages, {
    /* config for next-optimized-images */
  }],

]);