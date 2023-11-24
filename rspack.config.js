const assert = require('assert');
const path = require('path');
/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  entry: {
    main: './src/main.js',
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src'),
    },
  },
  watchOptions: {
    aggregateTimeout: 20,
    poll: 20,
  },
  plugins: [
    {
      apply(compiler) {
        compiler.hooks.compilation.tap('_', (compilation) => {
          // USERS PLEASE DO NOT USE THIS API, IT's TEST ONLY.
          compilation.hooks.succeedModule.tap('_', (module) => {
            if (module.moduleIdentifier.includes('a.js')) {
              process.platform === 'win32' &&
                assert(
                  !module.moduleIdentifier.includes('/'),
                  `Module Identifier of module 'a.js' should not include '/' on Windows`
                );
            }
          });
        });
      },
    },
  ],
  cache: true,
  experiments: {
    incrementalRebuild: true,
    rspackFuture: {
      newResolver: false,
    },
  },
};
