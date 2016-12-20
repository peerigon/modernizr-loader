# modernizr-loader for webpack

[![Build Status](https://travis-ci.org/peerigon/modernizr-loader.svg)](https://travis-ci.org/peerigon/modernizr-loader) [![devDependency Status](https://david-dm.org/peerigon/modernizr-loader/dev-status.svg)](https://david-dm.org/peerigon/modernizr-loader#info=devDependencies) [![peerDependency Status](https://david-dm.org/peerigon/modernizr-loader/peer-status.svg)](https://david-dm.org/peerigon/modernizr-loader#info=peerDependencies)

## Installation

```
$ npm install --save-dev modernizr modernizr-loader
```

## Initialization

You have to create a `.modernizrrc` configuration file and put your modernizr stuff in it. Like so

```javascript
// .modernizrrc
{
  "minify": true,
  "options": [
    "setClasses"
  ],
  "feature-detects": []
}
```

Full list of supported **"options"** and **"feature-detects"** can be found in Modernizr [config-all.json](https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json).

### Webpack config

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

Put the following code to your webpack config file:

```javascript
module.exports = {
  module: {
    loaders: [
      {
        test: /\.modernizrrc.js$/,
        loader: "modernizr"
      },
      {
        test: /\.modernizrrc(\.json)?$/,
        loader: "modernizr!json"
      }
    ]
  },
  resolve: {
    alias: {
      modernizr$: path.resolve(__dirname, "path/to/.modernizrrc")
    }
  }
}
```

### Usage

Now you are able to import your custom Modernizr build as a module throughout your application like so:

```javscript
import Modernizr from 'modernizr';

if (!Modernizr.promises) {
    // ...
}
```

See the [Modernizr documentation](https://modernizr.com/docs) for all available options.

## Contribution

Don't hesitate to create a pull request. Every contribution is appreciated.
