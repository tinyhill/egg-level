'use strict';

const fs = require('fs');
const level = require('level');
const mkdirp = require('mkdirp');
const path = require('path');

module.exports = app => {

  const appRoot = path.join(app.baseDir, 'leveldb');

  if (!fs.existsSync(appRoot)) mkdirp.sync(appRoot);

  app.leveldb = level(path.join(appRoot, app.config.leveldb.location));
};
