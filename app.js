'use strict';

const level = require('level');
const path = require('path');

module.exports = app => {
  const location = path.join(app.baseDir, 'leveldb', app.config.leveldb.location);
  app.leveldb = level(location);
};
