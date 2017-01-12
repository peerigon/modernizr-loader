## 1.0.1

- Fix: Modernizr tests not working properly if window is undefined ([#25](https://github.com/peerigon/modernizr-loader/pull/25))

## 1.0.0

- Don't attach Modernizr to window anymore
- Allow using a JavaScript file for configuration

**Important notice:** If you previously relied on a JSON configuration file, make sure to pass your configuration to the [`json-loader`](https://github.com/webpack/json-loader) before passing it to the `modernizr-loader` (we upgraded the example in the README). You don't need to do this with webpack 2, because it can require JSON by itself.

## 0.0.5

- Add [cacheable flag](https://webpack.github.io/docs/how-to-write-a-loader.html#flag-itself-cacheable-if-possible) ([#7](https://github.com/peerigon/modernizr-loader/issues/7))

## 0.0.4

- Expose Modernizr as a module [5423888](https://github.com/peerigon/modernizr-loader/commit/54238881f3d472ec713ad80730ceb3f99120ee0e)
