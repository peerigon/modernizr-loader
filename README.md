# modernizr-loader for webpack

[![Build Status](https://travis-ci.org/peerigon/modernizr-loader.svg)](https://travis-ci.org/peerigon/modernizr-loader) [![devDependency Status](https://david-dm.org/peerigon/modernizr-loader/dev-status.svg)](https://david-dm.org/peerigon/modernizr-loader#info=devDependencies) [![peerDependency Status](https://david-dm.org/peerigon/modernizr-loader/peer-status.svg)](https://david-dm.org/peerigon/modernizr-loader#info=peerDependencies)

## Installation

```
$ npm install --save modernizr-loader
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
        test: /\.modernizrrc$/,
        loader: "modernizr"
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

Now you are able to require this `.modernizrrc` and get your built modernizr bundled with webpack. Put it somewhere in your project files:

```javascript
require("!modernizr!./.modernizrrc")
// => returns compiled modernizr build based on your configuration
```

You are also able to import Modernizr as a module throughout your application like so:

```javscript
import Modernizr from 'modernizr';

if (!Modernizr.promises) {
    // ...
}
```

See the [Modernizr documentation](https://modernizr.com/docs) for all available options.

## Contribution

Don't hesitate to create a pull request. Every contribution is appreciated.
