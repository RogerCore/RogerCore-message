<img src="http://bitcore.io/css/images/module-message.png" alt="rogercore message" height="35">
# TheHolyRoger Message Verification and Signing for RogerCore


[![NPM Package](https://img.shields.io/npm/v/rogercore-message.svg?style=flat-square)](https://www.npmjs.org/package/rogercore-message)
[![Build Status](https://img.shields.io/travis/rogercore/rogercore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/rogercore/rogercore-message)
[![Coverage Status](https://img.shields.io/coveralls/rogercore/rogercore-message.svg?style=flat-square)](https://coveralls.io/r/rogercore/rogercore-message?branch=master)

RogerCore-message adds support for verifying and signing TheHolyRoger messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main v repo](https://github.com/RogerCore/RogerCore) for more information.

## Getting Started

```sh
npm install rogercore-message
```

```sh
bower install rogercore-message
```

To sign a message:

```javascript
var rogercore = require('rogercore-lib');
var Message = require('rogercore-message');

var privateKey = rogercore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H9XORZInM3B3a8BNS65kwgmbnqEuq73rjAQ5VKyVzTrzPOdHdHOY2lfoph5auvMgLSr7bh+nEQSG/f2kv9TnsbY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/RogerCore/RogerCore/blob/master/CONTRIBUTING.md) on the main RogerCore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/RogerCore/RogerCore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2016 The TheHolyRoger Core Developers

