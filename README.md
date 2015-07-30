# Find missing object keys (node and browser support)
[![npm package](https://nodei.co/npm/missing-keys.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/missing-keys/)

[![Build status](https://img.shields.io/travis/tobiasoberrauch/missing-keys.svg?style=flat-square)](https://travis-ci.org/tobiasoberrauch/missing-keys)
[![Coverage](https://img.shields.io/codecov/c/github/tobiasoberrauch/missing-keys.svg?style=flat-square)](https://codecov.io/github/tobiasoberrauch/missing-keys?branch=master)
[![Coverage](https://img.shields.io/coveralls/tobiasoberrauch/missing-keys.svg?style=flat-square)](https://coveralls.io/r/tobiasoberrauch/missing-keys)
[![Dependency Status](https://img.shields.io/david/tobiasoberrauch/missing-keys.svg?style=flat-square)](https://david-dm.org/tobiasoberrauch/missing-keys)
[![Gitter](https://img.shields.io/badge/gitter-join_chat-blue.svg?style=flat-square)](https://gitter.im/tobiasoberrauch/missing-keys?utm_source=badge)


## Super simple to use
Return missing keys if the given object hasn't all required keys.

```
var config = {
    name: 'missing-keys',
    description: 'Return missing keys if the given object has not all required keys.'
};
var requiredConfigKeys = ['name', 'author'];
missingKeys.get(config, requiredConfigKeys);
//-> ['author']
```

## Table of contents
- [Install](#install)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)


## Do you need help?
[Just open an issue](https://github.com/tobiasoberrauch/missing-keys/issues/new) and I will help you :)
[![Star on Github](https://img.shields.io/github/stars/tobiasoberrauch/missing-keys.svg?style=social)](https://github.com/tobiasoberrauch/missing-keys)
[![Follow me on Github](https://img.shields.io/github/followers/tobiasoberrauch.svg?style=social)](https://github.com/tobiasoberrauch)


## Install
### Installation with [npm](https://www.npmjs.com/)

```sh
$ npm install missing-keys --save
```

### Installation with [bower](https://www.bower.io/)

```sh
$ bower install missing-keys --save
```


## Usage
### Usage in node
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

### Usage in browser
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


## Tests
### Running tests with node
```sh
$ npm install && npm test
```

### Running test in browser
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