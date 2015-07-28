# Find missing object keys (node and browser support)
[![Travis CI](https://img.shields.io/travis/tobiasoberrauch/missing-keys.svg)](https://travis-ci.org/tobiasoberrauch/missing-keys)
[![Downloads average per month](https://img.shields.io/npm/dm/missing-keys.svg)](https://www.npmjs.com/package/missing-keys)
[![Npm version](https://img.shields.io/npm/v/missing-keys.svg)](https://www.npmjs.com/package/missing-keys)
[![Bower version](https://img.shields.io/bower/v/missing-keys.svg)](https://github.com/tobiasoberrauch/missing-keys)
[![Depedencies](https://img.shields.io/david/dev/tobiasoberrauch/missing-keys.svg)](https://www.npmjs.com/package/missing-keys)

> Return missing keys if the given object hasn't all required keys.

## Can I improve something or help you?
[Just open an issue](https://github.com/tobiasoberrauch/missing-keys/issues/new) and I will help you :)

## Install
### with [npm](https://www.npmjs.com/)

```sh
$ npm install missing-keys --save
```

### with [bower](https://www.bower.io/)

```sh
$ bower install missing-keys --save
```

## Usage in node
```sh

var missingKeys = require('missing-keys');

var config = {
    name: 'missing-keys',
    description: 'Return missing keys if the given object has not all required keys.',
    version: '0.1.0',
    homepage: 'https://github.com/tobiasoberrauch/missing-keys',
    author: 'Tobias Oberrauch <tobias.oberrauch@grolba.com>'
};

missingKeys.has(config, 'name');
//-> false

missingKeys.get(config, ['name', 'bin']);
//-> ['bin']

missingKeys(config, ['bin', 'dependencies']);
//-> ['bin', 'dependencies']

var requiredKeys = ['bin', 'dependencies'];
if (missingKeys.has(config, requiredKeys)) {
  var keys = missingKeys.get(config, requiredKeys);
}

```

## Usage in browser
```
<script type="text/javascript" src="./bower_components/missing-keys/index.js"></script>
<script type="text/javascript">
var config = {
    name: 'missing-keys',
    description: 'Return missing keys if the given object has not all required keys.',
    version: '0.1.0',
    homepage: 'https://github.com/tobiasoberrauch/missing-keys',
    author: 'Tobias Oberrauch <tobias.oberrauch@grolba.com>'
};

missingKeys.has(config, 'name');
//-> false

missingKeys.get(config, ['name', 'bin']);
//-> ['bin']

missingKeys(config, ['bin', 'dependencies']);
//-> ['bin', 'dependencies']

var requiredKeys = ['bin', 'dependencies'];
if (missingKeys.has(config, requiredKeys)) {
  var keys = missingKeys.get(config, requiredKeys);
}
</script>
```

## Do you like it? Please star it and follow me :)
[![Star on Github](https://img.shields.io/github/stars/tobiasoberrauch/missing-keys.svg?style=social)](https://github.com/tobiasoberrauch/missing-keys)
[![Follow me on Github](https://img.shields.io/github/followers/tobiasoberrauch.svg?style=social)](https://github.com/tobiasoberrauch)


## Running tests in node
```sh
$ npm install && npm test
```

## Running test in browser
Open ./test/index.html with your browser

## Contributing
Pull requests and stars are always welcome :)
For bugs and feature requests, [please create an issue](https://github.com/tobiasoberrauch/missing-keys/issues/new)

## Author
**Tobias Oberrauch**

+ [github/tobiasoberrauch](https://github.com/tobiasoberrauch)
+ [twitter/tobiasoberrauch](http://twitter.com/tobiasoberrauch)
+ [xing/tobiasoberrauch](http://xing.com/profile/Tobias_Oberrauch)

## License
Copyright © 2015 [Tobias Oberrauch](https://github.com/tobiasoberrauch)
Released under the MIT license.