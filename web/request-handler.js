var path = require('path');
var archive = require('../helpers/archive-helpers');
var http = require('http');
var httpHelpers = require('./http-helpers');
// require more modules/folders here!

var router = {
  GET: httpHelpers.getPage,
  OPTIONS: httpHelpers.handleCORS
};

exports.handleRequest = function (req, res) {
  console.log(req.method);
  var action = req.method;

  if(router[action]){
    router[action](req, res);
  }else{
    // 404
    httpHelpers.sendResponse(res, null, 404);
  }
};
