# egg-leveldb

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-leveldb.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-leveldb
[travis-image]: https://img.shields.io/travis/eggjs/egg-leveldb.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-leveldb
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-leveldb.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-leveldb?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-leveldb.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-leveldb
[snyk-image]: https://snyk.io/test/npm/egg-leveldb/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-leveldb
[download-image]: https://img.shields.io/npm/dm/egg-leveldb.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-leveldb

<!--
Description here.
-->

## Install

```bash
$ npm i egg-leveldb --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.leveldb = {
  enable: true,
  package: 'egg-leveldb',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.leveldb = {
  location: 'default', // defaults to {app_root}/leveldb/default
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
