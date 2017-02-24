'use strict';

var through = require('through2');
var streamqueue = require('streamqueue');
var es = require('event-stream');
var vinyl = require('vinyl-fs');

var ideal = function (opt) {
	var pass = through.obj();
  var files = opt.include;

  if (!files) {
    files = [];
  }

  for (var i = 0; i < files.length; i++) {
    files[i] = 'src/' + files[i] + '.js';
  }

  files.unshift('src/$core.js');

  // console.log(files);

  if (opt.prepend) {
    return es.duplex(pass, streamqueue({ objectMode: true }, vinyl.src(files), pass));
  }
  else if (opt.append) {
    return es.duplex(pass, streamqueue({ objectMode: true }, pass, vinyl.src(files)));
  }
  else {
    return es.duplex(pass, es.merge(vinyl.src(files), pass));
  }

};

ideal.import = function (file) {
  require(__dirname + '/src/' + file + '.js');
};

module.exports = ideal;
