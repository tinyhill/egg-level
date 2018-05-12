'use strict';

const fs = require('fs');
const level = require('level');
const mkdirp = require('mkdirp');
const path = require('path');

module.exports = app => {

  const rootDir = path.join(app.baseDir, 'leveldb');

  if (!fs.existsSync(rootDir)) mkdirp.sync(rootDir);

  app.leveldb = level(path.join(rootDir, app.config.leveldb.location));
};
