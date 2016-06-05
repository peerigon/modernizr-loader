# modernizr-loader for webpack

[![Build Status](https://travis-ci.org/peerigon/modernizr-loader.svg)](https://travis-ci.org/peerigon/modernizr-loader)

## Installation

```
$ npm install --save modernizr-loader
```

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

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

Now you are able to require this `.modernizrrc` and get your built modernizr bundled with webpack.

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


### webpack config

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

See the [Modernizr documentation](https://modernizr.com/docs) for all available options.

## Contribution

Don't hesitate to create a pull request. Every contribution is appreciated.
